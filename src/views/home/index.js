import { useEffect, useContext } from 'react';

import ErrorComponent from '../../components/ErrorComponent';
import Spinner from '../../components/Spinner';
import Popular from '../../components/Popular';
import Veggie from '../../components/Veggie';
// import Category from '../../components/Category'

import MenuContext from '../../context/menu/index';



const Home = () => {

    // const [ menu, setMenu ] = useState([])
    // const [isLoading, setIsLoading] = useState(true);
    const { isFetching, error, popular, veggie, getPopularData, getVeggieData } = useContext(MenuContext);



    useEffect(() => {
        getPopularData()
        getVeggieData()
      }, []);
    


    return(
        <div>
            { !error ? (
                <>
                    {isFetching && <Spinner/>}
                    {/* <Category /> */}
                    <Veggie veggie={veggie} />
                    <Popular popular={popular} />
                </>

                ): (
                    <ErrorComponent error={error} />
                  )
            }
        </div>
    )
}

export default Home