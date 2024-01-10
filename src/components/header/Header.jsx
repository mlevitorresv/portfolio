"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const react_1 = __importDefault(require("react"));
const HeaderStyled_1 = require("./HeaderStyled");
const HeaderTitleStyled_1 = require("./HeaderTitleStyled");
const Header = () => {
    return (<HeaderStyled_1.HeaderStyled>
      <HeaderTitleStyled_1.HeaderTitleStyled>MLEVITORRESV</HeaderTitleStyled_1.HeaderTitleStyled>
      {/* <BurgerMenuIconSyled /> */}
    </HeaderStyled_1.HeaderStyled>);
};
exports.Header = Header;
