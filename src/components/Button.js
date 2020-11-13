import styled, { css } from 'styled-components'
// import '../shared/_variables.scss'

const Button = styled.button`
    background: transparent;
    border-radius: 6px;
    border: 2px solid #49CBBF;
    color: #FFF;
    padding: 0.4rem 0.8rem;
    max-width: 200px;

    &:hover {
        background: #49CBBF;
    }
`;

export default Button;