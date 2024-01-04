import React from 'react'
import { DivRowStyled } from '../common/DivRowStyled'
import { PhotoStyled } from '../about/PhotoStyled'
import { DivContainerStyled } from '../common/DivContainerStyled'
import { PStyled } from '../common/PStyled'
import { TitleStyled } from '../common/TitleStyled'

export const Presentation = () => {
    return (
        <DivRowStyled type='dark'>
            <PhotoStyled src='src\assets\levi.jpg' alt='levi`s photo' />
            <PStyled type='clear' text='special'>
                <TitleStyled color='#09f' type='special'>HOLA SOY LEVÍ!</TitleStyled>                    Desarrollador web full stack JR, apasionado de la tecnología y
                el desarrollo de las aplicaciones web.
            </PStyled>
        </DivRowStyled >
    )
}
