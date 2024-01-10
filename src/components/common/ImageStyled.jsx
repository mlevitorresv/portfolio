"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.ImageStyled = styled_components_1.default.img `
    width: ${props => props.size === 'small' ? '2.75em' : props.size === 'large' ? '4.5em' : '3.4em'};
    height: ${props => props.size === 'small' || props.size === 'large' ? '2.5em' : '3.4em'};
    margin: 0 1em;
`;
