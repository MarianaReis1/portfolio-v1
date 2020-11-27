import styled from 'styled-components'

const Button = styled.button`
    background: transparent;
    border-radius: 5px;
    border: 3px solid #49CBBF; //$primaryColor2;
    color: #FFF;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.4rem 0.8rem;
    min-width: 150px;
    height: 40px;

    &:hover {
        background: #49CBBF; //$primaryColor2;
    }

    &:active {
        background: #49CBBF; //$primaryColor2;
    }
`;

export default Button;