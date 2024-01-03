import styled from "styled-components";
import { ImageStyledInterface } from "../../interfaces/styledInterface";


export const ImageStyled = styled.img<ImageStyledInterface>`
    width: ${props => props.size === 'small' ? '2.75em' : props.size === 'large' ? '4.5em' : '3.4em'};
    height: ${props => props.size === 'small' || props.size === 'large' ? '2.5em' : '3.4em'};
`