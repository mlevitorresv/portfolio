import styled from "styled-components";
import { DivContainerStyledInterface } from "../../interfaces/styledInterface";


export const DivRowStyled = styled.div<DivContainerStyledInterface>`
    display: flex;
    flex-direction: column;
    background: ${
        props => props.type === 'dark' ? '#022F40' : 
        props.type === 'medium' ? '#38AECC' : 
        props.type === 'dark-gradient' ? 'linear-gradient(#022F40 92%, white )' : 
        props.type === 'clear-gradient' ?  'linear-gradient(white 92%, #38AECC)' : 'white'
    };

    @media only screen and (min-width: 1000px){
        flex-direction: row;
        justify-content: space-between;
        padding: 0 20%;
        width: 60%;
    }
`