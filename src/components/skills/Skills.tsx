import React from 'react'
import { DivContainerStyled } from '../common/DivContainerStyled'
import { TitleStyled } from '../common/TitleStyled'
import { ImagesContainerStyled } from '../common/ImagesContainerStyled'
import { ImageStyled } from '../common/ImageStyled'

export const Skills = () => {
    return (
        <DivContainerStyled type='medium'>
            <TitleStyled>CONOCIMIENTOS</TitleStyled>
            <TitleStyled color='white'>FRONT-END</TitleStyled>
            <ImagesContainerStyled>
                <ImageStyled src='src\assets\html.png' alt='HTML icon' size='small' />
                <ImageStyled src='src\assets\css.png' alt='CSS icon' size='small' />
                <ImageStyled src='src\assets\js.png' alt='JS icon' size='small' />
                <ImageStyled src='src\assets\react.png' alt='React + Redux icon' size='small' />
            </ImagesContainerStyled>

            <ImagesContainerStyled>
                <ImageStyled src='src\assets\sass.png' alt='Sass icon' size='large' />
                <ImageStyled src='src\assets\bem.jpg' alt='BEM icon' size='large' />
            </ImagesContainerStyled>

            <TitleStyled color='white'>BACK-END</TitleStyled>
            <ImagesContainerStyled>
                <ImageStyled src='src\assets\node.png' alt='Node icon' size='small' />
                <ImageStyled src='src\assets\express.png' alt='Express icon' size='large' />
            </ImagesContainerStyled>
        </DivContainerStyled>
    )
}
