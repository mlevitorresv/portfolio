import styled from "styled-components";
import { TitleStyledInterface } from "../../interfaces/styledInterface";


export const TitleStyled = styled.h1<TitleStyledInterface>`
    color: ${props => props.color ? `${props.color}` : '#183446'};
    letter-spacing: normal;
    text-align: ${props => props.type === 'special' ? 'left' : 'center'};
    font-family: Open Sans;
    font-size: 24px;
    font-weight: 700;
    white-space: nowrap;
    border-right: ${props => props.type === 'special' ? '4px solid' : ''};
    animation: ${props => props.type === 'special' ? 'typing 2s steps(14), blink .5s infinite step-end alternate' : ''};
    overflow: ${props => props.type === 'special' ? 'hidden' : ''};
    width: ${props => props.type === 'special' ? '17ch' : ''};

    @keyframes typing {
        from { width: 0 }
    }

    @keyframes blink {
        50% { border-color: transparent}
    }
`

