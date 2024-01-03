import styled from "styled-components";


export const PhotoStyled = styled.img`
    display: block;
    border-radius: 50%;
    width: 10em;
    height: 15em;
    margin: 1em auto;

    @media only screen and (min-width: 1000px){
        width: 12em;
        height: 10em;
    }
`