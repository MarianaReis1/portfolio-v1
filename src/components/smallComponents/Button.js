import styled from 'styled-components'

const Button = styled.button`
    background: transparent;
    border-radius: 5px;
    border: 3px solid #49CBBF; //$primaryColor2;
    color: #FFF;
    padding: 0.5rem 0.9rem;
    min-width: 160px;
    min-height: 40px;

    &:hover {
        background: #49CBBF; //$primaryColor2;
    }

    &:active {
        background: #49CBBF; //$primaryColor2;
    }
`;

export default Button;