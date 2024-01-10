"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const react_1 = __importDefault(require("react"));
const FooterStyled_1 = require("./FooterStyled");
const FooterTitleStyled_1 = require("./FooterTitleStyled");
const ImagesContainerStyled_1 = require("../common/ImagesContainerStyled");
const ImageStyled_1 = require("../common/ImageStyled");
const Footer = () => {
    const downloadCV = () => {
        const url = 'src/assets/docCV.pdf';
        const link = document.createElement('a');
        link.href = url;
        link.download = `Mlevitorresv.pdf`;
        link.click();
        document.body.removeChild(link);
    };
    return (<FooterStyled_1.FooterStyled>
            <FooterTitleStyled_1.FooterTitleStyled>Copyright By Manuel Leví Torres Vicente - 2023</FooterTitleStyled_1.FooterTitleStyled>
            <ImagesContainerStyled_1.ImagesContainerStyled type='footer'>
                <a href='https://github.com/mlevitorresv/'>
                    <ImageStyled_1.ImageStyled size='small' src='src\assets\github.png' alt='Github icon'/>
                </a>
                <a href="https://www.linkedin.com/in/manuel-lev%C3%AD-torres-vicente-abb347241/">
                    <ImageStyled_1.ImageStyled src='src\assets\linkedin.png' alt='Linkedin icon' size='small'/>
                </a>
                <abbr title="descargar CV">
                    <ImageStyled_1.ImageStyled src='src\assets\cv.png' alt='CV icon' size='small' onClick={downloadCV}/>
                </abbr>
            </ImagesContainerStyled_1.ImagesContainerStyled>
        </FooterStyled_1.FooterStyled>);
};
exports.Footer = Footer;
