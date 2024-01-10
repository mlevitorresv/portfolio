"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivRowStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.DivRowStyled = styled_components_1.default.div `
    display: flex;
    flex-direction: column;
    background: ${props => props.type === 'dark' ? '#022F40' :
    props.type === 'medium' ? '#38AECC' :
        props.type === 'dark-gradient' ? 'linear-gradient(#022F40 92%, white )' :
            props.type === 'clear-gradient' ? 'linear-gradient(white 92%, #38AECC)' : 'white'};

    @media only screen and (min-width: 1000px){
        flex-direction: row;
        justify-content: space-between;
        padding: 0 20%;
        width: 60%;
    }
`;
