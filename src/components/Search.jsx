import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleSearched = (e) => {
        e.preventDefault();
        navigate("/searched/" + input);
        setInput('')
    }

    return (
        <div>
            <FormStyle onSubmit={handleSearched}>
                <FaSearch/>
                <input 
                    onChange={(e) => setInput(e.target.value)}
                    type="text" 
                    value={input} 
                />
            </FormStyle>
        </div>
    );
}

const FormStyle = styled.form`
    margin: 0 8rem 2rem;
    position: relative;
    div{
        position: relative;
        width: 100%;
    }
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        border: none;
        border-radius: 10px;
        outline: none;
        width: 100%;
        padding: 0.4rem;
        padding-left: 3rem;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;  
    }

    @media screen and (max-width: 768px){
        margin: 0;
        margin-bottom: 2rem;
    }
`;

export default Search;




