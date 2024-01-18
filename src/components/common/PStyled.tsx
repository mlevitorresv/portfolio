import styled from "styled-components";
import { PStyledInterface } from "../../interfaces/styledInterface";



export const PStyled = styled.p<PStyledInterface>`
    color: ${props => props.type === 'clear' ? 'white' : 'black'};
    font-family: ${props => props.text === 'special' ? 'Roboto' : 'Open Sans'};
    font-size: ${props => props.text === 'special' ? '.7em' : '1em'};
    font-weight: ${props => props.text === 'special' ? 'bold' : '400'};
    letter-spacing: ${props => props.text === 'special' ? '.3em' : ''};
    width: 80%;
    margin: 1em 10%;
    text-transform: ${props => props.text === 'special' ? 'uppercase' : ''};
    overflow: ${props => props.text === 'special' ? 'hidden' : ''};
    text-align:  ${props => props.justify ? 'justify' : ''};

    @media only screen and (min-width: 1000px){
        margin: 1em auto;
    }
`