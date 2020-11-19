import styled from 'styled-components'
// import '../shared/_variables.scss'

const Button = styled.button`
    background: transparent;
    border-radius: 5px;
    border: 3px solid #49CBBF;
    color: #FFF;
    font-weight: 500;
    padding: 0.4rem 0.8rem;
    min-width: 150px;
    height: 40px;

    &:hover {
        background: #49CBBF;
    }
`;

export default Button;