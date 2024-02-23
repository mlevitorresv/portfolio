"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skills = void 0;
const react_1 = __importDefault(require("react"));
const DivContainerStyled_1 = require("../common/DivContainerStyled");
const TitleStyled_1 = require("../common/TitleStyled");
const ImagesContainerStyled_1 = require("../common/ImagesContainerStyled");
const ImageStyled_1 = require("../common/ImageStyled");
const DivRowStyled_1 = require("../common/DivRowStyled");
const Skills = () => {
    return (<DivContainerStyled_1.DivContainerStyled type='medium-gradient'>
            <TitleStyled_1.TitleStyled>CONOCIMIENTOS</TitleStyled_1.TitleStyled>
            <DivRowStyled_1.DivRowStyled type='medium'>
                <DivContainerStyled_1.DivContainerStyled type='medium'>
                    <TitleStyled_1.TitleStyled color='white'>FRONT-END</TitleStyled_1.TitleStyled>
                    <ImagesContainerStyled_1.ImagesContainerStyled>
                        <ImageStyled_1.ImageStyled src='src\assets\html.png' alt='HTML icon' size='small'/>
                        <ImageStyled_1.ImageStyled src='src\assets\css.png' alt='CSS icon' size='small'/>
                        <ImageStyled_1.ImageStyled src='src\assets\js.png' alt='JS icon' size='small'/>
                        <ImageStyled_1.ImageStyled src='src\assets\react.png' alt='React + Redux icon' size='small'/>
                    </ImagesContainerStyled_1.ImagesContainerStyled>
                    <ImagesContainerStyled_1.ImagesContainerStyled>
                        <ImageStyled_1.ImageStyled src='src\assets\sass.png' alt='Sass icon' size='large'/>
                        <ImageStyled_1.ImageStyled src='src\assets\bem.jpg' alt='BEM icon' size='large'/>
                    </ImagesContainerStyled_1.ImagesContainerStyled>
                </DivContainerStyled_1.DivContainerStyled>
                <DivContainerStyled_1.DivContainerStyled type='medium'>
                    <TitleStyled_1.TitleStyled color='white'>BACK-END</TitleStyled_1.TitleStyled>
                    <ImagesContainerStyled_1.ImagesContainerStyled>
                        <ImageStyled_1.ImageStyled src='src\assets\node.png' alt='Node icon' size='small'/>
                        <ImageStyled_1.ImageStyled src='src\assets\express.png' alt='Express icon' size='large'/>
                    </ImagesContainerStyled_1.ImagesContainerStyled>
                </DivContainerStyled_1.DivContainerStyled>
                <DivContainerStyled_1.DivContainerStyled type='medium'>
                    <TitleStyled_1.TitleStyled color='white'>HERRAMIENTAS</TitleStyled_1.TitleStyled>
                    <ImagesContainerStyled_1.ImagesContainerStyled>
                        <ImageStyled_1.ImageStyled src='src\assets\postman.png' alt='Postman icon' size='small'/>
                        <ImageStyled_1.ImageStyled src='src\assets\vs.png' alt='VS Code icon' size='small'/>
                    </ImagesContainerStyled_1.ImagesContainerStyled>
                </DivContainerStyled_1.DivContainerStyled>
            </DivRowStyled_1.DivRowStyled>
        </DivContainerStyled_1.DivContainerStyled>);
};
exports.Skills = Skills;
