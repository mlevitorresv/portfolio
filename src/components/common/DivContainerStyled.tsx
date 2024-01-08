import styled from "styled-components";
import { DivContainerStyledInterface } from "../../interfaces/styledInterface";



export const DivContainerStyled = styled.div<DivContainerStyledInterface>`
    background: ${
        props => props.type === 'transparent' ? 'transparent' :
        props.type === 'dark' ? '#022F40' : 
        props.type === 'medium' ? '#38AECC' : 
        props.type === 'dark-gradient' ? 'linear-gradient(#022F40 92%, white )' : 
        props.type === 'clear-gradient' ?  'linear-gradient(white 92%, #38AECC)' : 
        props.type === 'medium-gradient' ? 'linear-gradient(#38AECC 92%, white)' : 'white'
    };
    width: 100%;
    padding: 2em 0 3em;
    content-align: center;
`