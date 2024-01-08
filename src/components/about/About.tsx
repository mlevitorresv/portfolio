import React from 'react'
import { PStyled } from '../common/PStyled'
import { DivContainerStyled } from '../common/DivContainerStyled'
import { PhotoStyled } from './PhotoStyled'
import { DivRowStyled } from '../common/DivRowStyled'
import { MusicIconStyled } from '../common/IconStyled'

export const About = (): React.JSX.Element => {
  return (
    <DivRowStyled type='dark-gradient'>
      <DivContainerStyled type='transparent'>
        <PhotoStyled src='src\assets\developer.gif' alt='gif about developer' type='special'/>
        <PStyled type='clear'>
          Siempre he sido una persona a la que le apasiona la tecnología, 
          desde pequeño me interesaba por todo aquello que tuviese una pantalla 
          y un teclado, me gustaba trastear, investigar y saber mucho sobre este mundo.
          Siempre tuve claro que quería dedicarme a la informática, por ello en 2018 decidí cursar
          un F.P.G.M en sistemas microinformáticos y redes, después, un F.P.G.S de Desarrollo de Aplicaciones
          Multiplataforma.
        </PStyled>
        <PStyled type='clear'>
          Después de haber cursado dos grados de formación profesional, decidí ser "full stack", pero...
          ¿Porqué full stack? Porque el desarrollo de aplicaciones con un
          back-end robusto y seguro, que, fusionado con un front-end responsivo,
          claro y llamativo para el cliente genera aplicaciones muy completas.
        </PStyled>
        <PStyled type='clear'>
          Pero no todo es teclear código, me gusta mucho el deporte, en especial el fútbol. También me gusta viajar,
          conocer lugares nuevos y sobre todo hacerlo rodeado de buena compañía como familia y amigos.<br />
          Aunque me gusta pasar tiempo rodeado, también disfruto mucho los momentos de "soledad" para disfrutar de tiempo
          conmigo mismo.       
        </PStyled>
        <PStyled type='clear'>
          ¡Ah y que no se me olvide, me encanta la música! Vivo con ella... <MusicIconStyled />
        </PStyled>
        
      </DivContainerStyled>
    </DivRowStyled>
  )
}
