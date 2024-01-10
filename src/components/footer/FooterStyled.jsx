"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.FooterStyled = styled_components_1.default.footer `
    background-color: #183446;
    color: white;
    display: flex;
    flex-direction: column;
    padding: 1em;
    justify-content: center;

    @media only screen and (min-width: 1000px){
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;
