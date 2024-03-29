import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const Category = () => {
    return(
        <List>
            <SLink to={'cuisine/italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to={'cuisine/american'}>
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to={'cuisine/thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>
            <SLink to={'cuisine/japanese'}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </SLink>
        </List>
    )
}

const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-bottom: 2rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4{
        color: white;
        font-size: 0.8rem;
    }
    svg{
        color: white;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg{
            color: white;
        }
        h4{
            color: white;
        }
    }
`;

export default Category;