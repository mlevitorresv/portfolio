import styled from "styled-components";
import { PStyledInterface } from "../../interfaces/styledInterface";



export const PStyled = styled.p<PStyledInterface>`
    color: ${props => props.type === 'clear' ? 'white' : 'black'};
    font-family: Open Sans;
    font-size: 1em;
    font-weight: 400;
    width: 80%;
    margin: 1em 10%;
`