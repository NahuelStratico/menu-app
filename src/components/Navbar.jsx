import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';

const Navbar = () => {
    return (
        <header>
            <Nav>
                <GiKnifeFork />
                <Logo to={'/'}>Delicius</Logo>
            </Nav>
        </header>
    );
}

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 400;
    font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
    padding: 4rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    svg{
        font-size: 2rem;
    }
    @media screen and (max-width: 768px){
        padding: 1.5rem 0;
    }
`;

export default Navbar;
