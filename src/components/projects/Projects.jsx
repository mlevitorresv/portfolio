"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
const react_1 = __importDefault(require("react"));
const DivContainerStyled_1 = require("../common/DivContainerStyled");
const TitleStyled_1 = require("../common/TitleStyled");
const Carousel_1 = require("./Carousel");
const Projects = () => {
    return (<DivContainerStyled_1.DivContainerStyled type='clear'>
            <TitleStyled_1.TitleStyled>PROYECTOS</TitleStyled_1.TitleStyled>
            <Carousel_1.Carousel />
        </DivContainerStyled_1.DivContainerStyled>);
};
exports.Projects = Projects;
