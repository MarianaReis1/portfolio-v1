import styled from 'styled-components'

export const Label = styled.label`
    display: block;
    position: relative;
    top: -35px;
    z-index: -1;
`;

Label.Text = styled.span`
    position: absolute;
    color: pink;
    left: 15px;
`

export default Label.Text