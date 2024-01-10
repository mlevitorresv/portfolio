"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.TitleStyled = styled_components_1.default.h1 `
    color: ${props => props.color ? `${props.color}` : '#183446'};
    letter-spacing: normal;
    text-align: ${props => props.type === 'special' ? 'left' : 'center'};
    font-family: Open Sans;
    font-size: 24px;
    font-weight: 700;
    white-space: nowrap;
    border-right: ${props => props.type === 'special' ? '4px solid' : ''};
    animation: ${props => props.type === 'special' ? 'typing 2s steps(14), blink .5s infinite step-end alternate' : ''};
    overflow: ${props => props.type === 'special' ? 'hidden' : ''};
    width: ${props => props.type === 'special' ? '17ch' : ''};

    @keyframes typing {
        from { width: 0 }
    }

    @keyframes blink {
        50% { border-color: transparent}
    }
`;
