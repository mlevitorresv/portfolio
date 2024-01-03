import React from 'react'
import { PStyled } from '../common/PStyled'
import { DivContainerStyled } from '../common/DivContainerStyled'
import { PhotoStyled } from './PhotoStyled'
import { DivRowStyled } from '../common/DivRowStyled'

export const About = (): React.JSX.Element => {
  return (
    <DivRowStyled type='dark'>
      <PhotoStyled src='src\assets\levi.jpg' alt='levi`s photo' />
      <DivContainerStyled type='dark'>
        <PStyled type='clear'>
          Hola, soy Manuel Leví.<br />
          Soy desarrollador web full stack, apasionado de la tecnología y
          el desarrollo de las aplicaciones web.
        </PStyled>
        <PStyled type='clear'>
          ¿Porqué full stack? Porque el desarrollo de aplicaciones con un
          back-end robusto y seguro, que, fusionado con un front-end responsivo,
          claro y llamativo para el cliente genera aplicaciones muy completas.
        </PStyled>
      </DivContainerStyled>
    </DivRowStyled>
  )
}
