import React from 'react'
import { FooterStyled } from './FooterStyled'
import { FooterTitleStyled } from './FooterTitleStyled'
import { ImagesContainerStyled } from '../common/ImagesContainerStyled'
import { ImageStyled } from '../common/ImageStyled'

export const Footer = () => {

    const downloadCV = () => {
        const url = 'src/assets/docCV.pdf';
        const link: HTMLAnchorElement = document.createElement('a');
        link.href = url;
        link.download = `Mlevitorresv.pdf`
        link.click();
        document.body.removeChild(link);
    }

    return (
        <FooterStyled>
            <FooterTitleStyled>Copyright By Manuel Leví Torres Vicente - 2023</FooterTitleStyled>
            <ImagesContainerStyled type='footer'>
                <a href='https://github.com/mlevitorresv/'>
                    <ImageStyled size='small' src='src\assets\github.png' alt='Github icon' />
                </a>
                <a href="https://www.linkedin.com/in/manuel-lev%C3%AD-torres-vicente-abb347241/">
                    <ImageStyled src='src\assets\linkedin.png' alt='Linkedin icon' size='small' />
                </a>
                <abbr title="descargar CV">
                    <ImageStyled src='src\assets\cv.png' alt='CV icon' size='small' onClick={downloadCV} />
                </abbr>
            </ImagesContainerStyled>
        </FooterStyled>
    )
}
