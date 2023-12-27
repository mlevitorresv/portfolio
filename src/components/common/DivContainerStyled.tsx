import styled from "styled-components";



export const DivContainerStyled = styled.div`
    background-color: ${props => props.typeof === 'dark' ? '#022F40' : props.typeof === 'medium' ? '#38AECC' : 'white'};
    width: 100%;
    padding: 2em 2em 3em;
`