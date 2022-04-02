import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import styled from 'styled-components';

const apiKey = '13ed7c2f1c6841189e00ee237d74e125';


const Cuisine = () =>{

    const [ cuisine, setCuisine ] = useState([])
    const [error, setError] = useState();
    
    const params = useParams();

    const getCuisineTag = async (name) => {
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${name}&number=10`);
            // const data = Object.values(response.data);
            const data = response.data.results;
            console.log(data)
            setCuisine(data);
          
            
        } catch (error) {
            setError(error);
        }
    }

    useEffect(() => {
        getCuisineTag(params.type)
        console.log(params.type)
    },[params.type])

    return(
        <Grid>
            {cuisine.map(item => {
                return(
                    <Card key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                    </Card>
                )
            })}
        </Grid>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`;

export default Cuisine;