import styled from "styled-components";
import { TitleStyledInterface } from "../../interfaces/styledInterface";


export const TitleStyled = styled.h1<TitleStyledInterface>`
    color: ${props => props.color === 'white' ? 'white' : '#183446'};
    text-align: center;
    font-family: Open Sans;
    font-size: 24px;
    font-weight: 700;
`