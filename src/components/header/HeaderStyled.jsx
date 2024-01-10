"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.HeaderStyled = styled_components_1.default.header `
    background-color: #183446;

    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0em;
    width: 100%;
`;
