import styled from "styled-components";
import { DivContainerStyledInterface } from "../../interfaces/styledInterface";



export const DivContainerStyled = styled.div<DivContainerStyledInterface>`
    background-color: ${props => props.type === 'dark' ? '#022F40' : props.type === 'medium' ? '#38AECC' : 'white'};
    width: 100%;
    padding: 2em 0 3em;
    content-align: center;
`