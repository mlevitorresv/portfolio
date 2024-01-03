import styled from "styled-components";


export const FooterStyled = styled.footer`
    background-color: #183446;
    color: white;
    display: flex;
    flex-direction: column;
    padding: 1em;
    justify-content: center;

    @media only screen and (min-width: 1000px){
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`