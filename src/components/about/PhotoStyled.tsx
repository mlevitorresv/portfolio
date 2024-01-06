import styled from "styled-components";
import { PhotoStyledInterface } from "../../interfaces/styledInterface";


export const PhotoStyled = styled.img<PhotoStyledInterface>`
    display: block;
    border-radius: ${props => props.type === 'special' ? '15px' : '50%'};
    width: ${props => props.type === 'special' ? '80%' : '10em'};
    height: auto;
    margin: 1em auto;

    @media only screen and (min-width: 1000px){
        width: ${props => props.type === 'special' ? '18em' : '12em'};
        height: ${props => props.type === 'special' ? '100%' : 'auto'};
        border-radius: 20px;
        float: ${props => props.type === 'special' ? 'right' : ''}
    }
`