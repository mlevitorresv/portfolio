import styled from "styled-components";
import { ImageStyledInterface } from "../../interfaces/styledInterface";


export const ImageStyled = styled.img<ImageStyledInterface>`
    width: ${props => props.size === 'small' ? '2.75em'  : '4.5em'};
    height: 2.5em;
`