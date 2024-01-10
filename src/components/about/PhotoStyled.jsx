"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.PhotoStyled = styled_components_1.default.img `
    display: block;
    border-radius: ${props => props.type === 'special' ? '15px' : '50%'};
    width: ${props => props.type === 'special' ? '80%' : '10em'};
    height: auto;
    margin: 1em auto;

    @media only screen and (min-width: 1000px){
        width: ${props => props.type === 'special' ? '18em' : '12em'};
        height: ${props => props.type === 'special' ? '60%' : 'auto'};
        border-radius: 20px;
        float: ${props => props.type === 'special' ? 'right' : ''}
    }
`;
