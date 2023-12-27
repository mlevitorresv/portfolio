import styled from "styled-components";



export const PStyled = styled.p`
    color: ${props => props.typeof === 'white' ? 'white' : 'black'};
    font-family: Open Sans;
    font-size: .8em;
    font-weight: 400;
    width: 100%;
`