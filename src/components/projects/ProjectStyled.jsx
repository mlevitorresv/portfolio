"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.ProjectStyled = styled_components_1.default.div `
    background-color: #046E8F;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 1em;
    min-height: 16em;
    width: 60%;
    margin: 2em auto;
    border-radius: 10px;
`;
