import { useState } from 'react';
import axios from "axios";

import MenuContext from "./index";

const apiKey = '13ed7c2f1c6841189e00ee237d74e125';
const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';

const authAxios = axios.create({
    baseURL: apiUrl,
    headers: { 'Content-Type': 'application/json'},
});

export default function MenuProvider({children}) {
    const [results, setResults] = useState([]);
    const [error, setError] = useState();
    const [isFetching, setIsFetching] = useState(true);

    const getMenu = async () => {
        try {
            const response = await authAxios.get(`?apiKey=${apiKey}&includeNutrition=true.`);
            const data = Object.values(response.data.results);
            console.log(data)
            setIsFetching(true)
            setResults(data);
            
        } catch (error) {
            setError(error);
        }finally{
            setIsFetching(false)
        } 
    }

    return(
        <MenuContext.Provider value={{
            getMenu,
            isFetching,
            error,
            results,
        }}>
            {children}
        </MenuContext.Provider>
    )
}
