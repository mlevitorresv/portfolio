import React from 'react'
import { DivRowStyled } from '../common/DivRowStyled'
import { PhotoStyled } from '../about/PhotoStyled'
import { DivContainerStyled } from '../common/DivContainerStyled'
import { PStyled } from '../common/PStyled'
import { TitleStyled } from '../common/TitleStyled'
import { ImagesContainerStyled } from '../common/ImagesContainerStyled'
import { ImageStyled } from '../common/ImageStyled'

export const Presentation = () => {
    const downloadCV = () => {
        const url = 'src/assets/docCV.pdf';
        const link: HTMLAnchorElement = document.createElement('a');
        link.href = url;
        link.download = `Mlevitorresv.pdf`
        link.click();
        document.body.removeChild(link);
    }
    return (
        <DivRowStyled type='dark'>
            <PhotoStyled src='src\assets\levi.jpg' alt='levi`s photo' />
            <DivContainerStyled type='transparent'>
                <PStyled type='clear' text='special'>
                    <TitleStyled color='#09f' type='special'>HOLA SOY LEVÍ!</TitleStyled>                    Desarrollador web full stack JR, apasionado de la tecnología y
                    el desarrollo de aplicaciones web.
                </PStyled>
                <ImagesContainerStyled type='contact'>
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
                <abbr title="620 468 240">
                        <ImageStyled src='src\assets\whatsapp.png' alt='Whatsapp icon' size='contact' />
                </abbr>
                <abbr title="descargar CV">
                    <ImageStyled src='src\assets\cv.png' alt='CV icon' size='contact' onClick={downloadCV} />
                </abbr>
            </ImagesContainerStyled>
            </DivContainerStyled>
        </DivRowStyled >
    )
}
