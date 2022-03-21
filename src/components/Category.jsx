import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Category = () => {
    return(
        <List>
            <Link to={'cuisine/italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </Link>
            <Link to={'cuisine/american'}>
                <FaHamburger />
                <h4>American</h4>
            </Link>
            <Link to={'cuisine/thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </Link>
            <Link to={'cuisine/japanese'}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </Link>
        </List>
    )
}

const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export default Category;