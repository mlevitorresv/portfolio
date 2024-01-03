import React from 'react'
import { DivContainerStyled } from '../common/DivContainerStyled'
import { TitleStyled } from '../common/TitleStyled'
import { TimeLine } from './TimeLine'

export const Training = (): React.JSX.Element => {
  return (
    <DivContainerStyled type='clear'>
      <TitleStyled>MI VIDA INFORMÁTICA</TitleStyled>
      <TimeLine />
    </DivContainerStyled>
  )
}
