import { useEffect, useRef, useContext } from 'react';

import ErrorComponent from '../../components/ErrorComponent';
import Spinner from '../../components/Spinner';
import ResultsList from '../../components/ResultsList';
import MenuContext from '../../context/menu/index';

// const apiKey = '13ed7c2f1c6841189e00ee237d74e125'
// const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch'

// const authAxios = axios.create({
//     baseURL: apiUrl,
//     headers: { 'Content-Type': 'application/json'},
//   });


const Home = () => {

    // const [ menu, setMenu ] = useState([])
    // const [isLoading, setIsLoading] = useState(true);
    const { isFetching, error, results, getMenu } = useContext(MenuContext);

    const fetchResultsRef = useRef();

    const fetchResults = async () => {
        await getMenu()
    }

    fetchResultsRef.current = fetchResults;

    useEffect(() => {
        fetchResultsRef?.current()?.catch(null);
      }, []);

    // const getDishes = async () => {
    //     try {
    //         const response = await authAxios.get(`?apiKey=${apiKey}&includeNutrition=true.`);
    //         const data = Object.values(response.data.results);
    //         console.log(data)
    //         setMenu(data);
            
    //     } catch (error) {
    //         console.error(error);
    //     }
          
    // }

    // useEffect(() => {
    //     getDishes()
    // }, []);

    


    return(
        <div>
            <h1>Menú</h1>
            { !error ? (
                <>
                    {isFetching && <Spinner/>}
                    <ResultsList  data={results} />
                </>

                ): (
                    <ErrorComponent error={error} />
                  )
            }
        </div>
    )
}

export default Home