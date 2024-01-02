import React from 'react'
import { DivContainerStyled } from '../common/DivContainerStyled'
import { TitleStyled } from '../common/TitleStyled'
import { Carousel } from './carousel';


export const Projects = () => {

    

    return (
        <DivContainerStyled type='clear'>
            <TitleStyled>PROYECTOS</TitleStyled>
            <Carousel />
        </DivContainerStyled>
    )
}
