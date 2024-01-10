"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderTitleStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.HeaderTitleStyled = styled_components_1.default.h1 `
    color: white;
    font-family: 'Allan', serif;
    font-size: 1.5em;
    font-weight: 700;
    margin-left: 2em;
`;
