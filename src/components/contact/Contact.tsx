import React from 'react'
import { DivContainerStyled } from '../common/DivContainerStyled'
import { TitleStyled } from '../common/TitleStyled'
import { ImageStyled } from '../common/ImageStyled'
import { ImagesContainerStyled } from '../common/ImagesContainerStyled'

export const Contact = () => {

    const downloadCV = () => {
        const url = 'src/assets/docCV.pdf';
        const link: HTMLAnchorElement = document.createElement('a');
        link.href = url;
        link.download = `Mlevitorresv.pdf`
        link.click();
        document.body.removeChild(link);
    }

    return (
        <DivContainerStyled type='clear'>
            <TitleStyled>CONTÁCTAME</TitleStyled>
            <ImagesContainerStyled>
                <abbr title="gmail">
                    <a href="mailto: levitorres66@gmail.com">
                        <ImageStyled src='src\assets\gmail.png' alt='Gmail icon' size='contact' />
                    </a>
                </abbr>
                <abbr title="linkedin">
                    <a href="https://www.linkedin.com/in/manuel-lev%C3%AD-torres-vicente-abb347241/">
                        <ImageStyled src='src\assets\linkedin.png' alt='Linkedin icon' size='contact' />
                    </a>
                </abbr>
                <abbr title="descargar CV">
                    <ImageStyled src='src\assets\cv.png' alt='CV icon' size='contact' onClick={downloadCV} />
                </abbr>
            </ImagesContainerStyled>
        </DivContainerStyled>
    )
}
