"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presentation = void 0;
const react_1 = __importDefault(require("react"));
const DivRowStyled_1 = require("../common/DivRowStyled");
const PhotoStyled_1 = require("../about/PhotoStyled");
const PStyled_1 = require("../common/PStyled");
const TitleStyled_1 = require("../common/TitleStyled");
const Presentation = () => {
    return (<DivRowStyled_1.DivRowStyled type='dark'>
            <PhotoStyled_1.PhotoStyled src='src\assets\levi.jpg' alt='levi`s photo'/>
            <PStyled_1.PStyled type='clear' text='special'>
                <TitleStyled_1.TitleStyled color='#09f' type='special'>HOLA SOY LEVÍ!</TitleStyled_1.TitleStyled>                    Desarrollador web full stack JR, apasionado de la tecnología y
                el desarrollo de aplicaciones web.
            </PStyled_1.PStyled>
        </DivRowStyled_1.DivRowStyled>);
};
exports.Presentation = Presentation;
