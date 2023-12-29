import React from 'react'
import { FooterStyled } from './FooterStyled'
import { FooterTitleStyled } from './FooterTitleStyled'
import { ImagesContainerStyled } from '../common/ImagesContainerStyled'
import { ImageStyled } from '../common/ImageStyled'

export const Footer = () => {
  return (
    <FooterStyled>
        <FooterTitleStyled>Copyright By Manuel Leví Torres Vicente - 2023</FooterTitleStyled>
        <ImagesContainerStyled>
        <ImageStyled size='small' src='src\assets\github.png' alt='Github icon'></ImageStyled>
        <ImageStyled size='small' src='src\assets\linkedin.png' alt='Linkedin icon'></ImageStyled>
        </ImagesContainerStyled>
    </FooterStyled>
  )
}
