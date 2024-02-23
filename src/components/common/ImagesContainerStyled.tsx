import styled from "styled-components";
import { ImagesContainerStyledInterface } from "../../interfaces/styledInterface";


export const ImagesContainerStyled = styled.div<ImagesContainerStyledInterface>`
    width: 70%;
    margin: ${props => props.type === 'contact' ? '4em auto' : '1em auto'};
    display: flex;
    justify-content: ${props => props.type === 'footer' ? 'end' : 'space-evenly'};
`