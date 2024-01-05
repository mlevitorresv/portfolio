import styled from "styled-components";
import { PhotoStyledInterface } from "../../interfaces/styledInterface";


export const PhotoStyled = styled.img<PhotoStyledInterface>`
    display: block;
    border-radius: 50%;
    width: 10em;
    height: 15em;
    margin: 1em auto;

    @media only screen and (min-width: 1000px){
        width: 12em;
        height: ato;
        border-radius: 20px;
        float: ${props => props.type === 'special' ? 'right' : ''}
    }
`