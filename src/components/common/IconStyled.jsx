"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicIconStyled = exports.BurgerMenuIconSyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const gi_1 = require("react-icons/gi");
const gi_2 = require("react-icons/gi");
const sharedIconStyle = `
    color: white;
    margin: 0 1em;
    cursor: pointer;
`;
exports.BurgerMenuIconSyled = (0, styled_components_1.default)(gi_1.GiHamburgerMenu) `
    ${sharedIconStyle}
`;
exports.MusicIconStyled = (0, styled_components_1.default)(gi_2.GiMusicalNotes) `
    ${sharedIconStyle}
`;
