"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivContainerStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.DivContainerStyled = styled_components_1.default.div `
    background: ${props => props.type === 'transparent' ? 'transparent' :
    props.type === 'dark' ? '#022F40' :
        props.type === 'medium' ? '#38AECC' :
            props.type === 'dark-gradient' ? 'linear-gradient(#022F40 92%, white )' :
                props.type === 'clear-gradient' ? 'linear-gradient(white 92%, #38AECC)' :
                    props.type === 'medium-gradient' ? 'linear-gradient(#38AECC 92%, white)' : 'white'};
    width: 100%;
    padding: 2em 0 3em;
    content-align: center;
    overflow: hidden;
`;
