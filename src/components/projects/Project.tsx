import React from 'react'
import { ProjectStyled } from './ProjectStyled'
import { TitleStyled } from '../common/TitleStyled'
import { PStyled } from '../common/PStyled'
import { ProjectInterface } from '../../interfaces/componentsInterface'

export const Project = (props: ProjectInterface) => {
  return (
    <ProjectStyled className='shadow slide-item transition-all'>
      <img src={props.img} alt={props.alt} />
      <TitleStyled color='white'>{props.title}</TitleStyled>
      <PStyled type='clear'>
        {props.desc}
      </PStyled>
    </ProjectStyled>
  )
}
