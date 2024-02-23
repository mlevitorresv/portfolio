"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.LoadingStyled = styled_components_1.default.div `
    width: 100%;
    display: flex;
    justify-content: center;
`;
