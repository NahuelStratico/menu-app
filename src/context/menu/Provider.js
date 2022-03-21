import { useState } from 'react';
import axios from "axios";

import MenuContext from "./index";

const apiKey = '13ed7c2f1c6841189e00ee237d74e125';
// const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';
// const apiUrl = 'https://api.spoonacular.com/recipes/716429/information';

const authAxios = axios.create({
    headers: { 'Content-Type': 'application/json'},
});

export default function MenuProvider({children}) {
    const [popular, setPopular] = useState([]);
    const [veggie, setVeggie] = useState([]);
    const [error, setError] = useState();
    const [isFetching, setIsFetching] = useState(true);

    const getPopularData = async () => {
        try {
            const response = await authAxios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9`);
            // const data = Object.values(response.data);
            const data = response.data.recipes;
            console.log(data)
            setIsFetching(true)
            setPopular(data);
            
        } catch (error) {
            setError(error);
        }finally{
            setIsFetching(false)
        } 
    }

    const getVeggieData = async () => {
        try {
            const response = await authAxios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9&tags=vegetarian`);
            // const data = Object.values(response.data);
            const data = response.data.recipes;
            console.log(data)
            setIsFetching(true)
            setVeggie(data);
            
        } catch (error) {
            setError(error);
        }finally{
            setIsFetching(false)
        } 
    }

    return(
        <MenuContext.Provider value={{
            getPopularData,
            getVeggieData,
            isFetching,
            error,
            popular,
            veggie,
        }}>
            {children}
        </MenuContext.Provider>
    )
}
