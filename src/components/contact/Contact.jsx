"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const react_1 = __importDefault(require("react"));
const DivContainerStyled_1 = require("../common/DivContainerStyled");
const TitleStyled_1 = require("../common/TitleStyled");
const ImageStyled_1 = require("../common/ImageStyled");
const ImagesContainerStyled_1 = require("../common/ImagesContainerStyled");
const Contact = () => {
    return (<DivContainerStyled_1.DivContainerStyled type='clear'>
            <TitleStyled_1.TitleStyled>CONTÁCTAME</TitleStyled_1.TitleStyled>
            <ImagesContainerStyled_1.ImagesContainerStyled>
                <abbr title="gmail">
                    <a href="mailto: levitorres66@gmail.com">
                        <ImageStyled_1.ImageStyled src='src\assets\gmail.png' alt='Gmail icon' size='contact'/>
                    </a>
                </abbr>
                <abbr title="linkedin">
                    <a href="https://www.linkedin.com/in/manuel-lev%C3%AD-torres-vicente-abb347241/">
                        <ImageStyled_1.ImageStyled src='src\assets\linkedin.png' alt='Linkedin icon' size='contact'/>
                    </a>
                </abbr>
                <abbr title="620 468 240">
                        <ImageStyled_1.ImageStyled src='src\assets\whatsapp.png' alt='Whatsapp icon' size='contact'/>
                </abbr>
            </ImagesContainerStyled_1.ImagesContainerStyled>
        </DivContainerStyled_1.DivContainerStyled>);
};
exports.Contact = Contact;
