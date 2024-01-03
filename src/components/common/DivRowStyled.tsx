import styled from "styled-components";
import { DivContainerStyledInterface } from "../../interfaces/styledInterface";


export const DivRowStyled = styled.div<DivContainerStyledInterface>`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.type === 'dark' ? '#022F40' : props.type === 'medium' ? '#38AECC' : 'white'};

    @media only screen and (min-width: 1000px){
        flex-direction: row;
        justify-content: space-between;
        padding: 0 10%;
    }
`