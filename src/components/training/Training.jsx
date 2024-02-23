"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Training = void 0;
const react_1 = __importDefault(require("react"));
const DivContainerStyled_1 = require("../common/DivContainerStyled");
const TitleStyled_1 = require("../common/TitleStyled");
const TimeLine_1 = require("./TimeLine");
const Training = () => {
    return (<DivContainerStyled_1.DivContainerStyled type='clear-gradient'>
      <TitleStyled_1.TitleStyled>MI VIDA INFORMÁTICA</TitleStyled_1.TitleStyled>
      <TimeLine_1.TimeLine />
    </DivContainerStyled_1.DivContainerStyled>);
};
exports.Training = Training;
