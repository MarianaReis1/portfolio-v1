import styled, { css } from 'styled-components'


const Input = styled.input`
    background-color: transparent;
    border-radius: 5px;
    border: 3px solid #49CBBF;
    color: #fff;


    height: 40px;
    padding: 0.4rem 0.8rem;
    width: 100%;
    margin: 0.3rem 0;

    &:focus + label {
        transform: scale(0.5) translateY(-16px) translateX(-125px);
    }

    ${function ({ hasValue }) {
        console.log(hasValue)
        return hasValue && css`
            & + label {
                transform: scale(0.5) translateY(-16px) translateX(-125px);
            }
        `
    }}

`

export default Input;