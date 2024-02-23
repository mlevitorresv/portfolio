"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesContainerStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.ImagesContainerStyled = styled_components_1.default.div `
    width: 70%;
    margin:1em auto;
    display: flex;
    justify-content: ${props => props.type === 'footer' ? 'end' : 'space-evenly'};
`;
