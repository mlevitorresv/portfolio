"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.About = void 0;
const react_1 = __importDefault(require("react"));
const PStyled_1 = require("../common/PStyled");
const DivContainerStyled_1 = require("../common/DivContainerStyled");
const PhotoStyled_1 = require("./PhotoStyled");
const DivRowStyled_1 = require("../common/DivRowStyled");
const IconStyled_1 = require("../common/IconStyled");
const About = () => {
    return (<DivRowStyled_1.DivRowStyled type='dark-gradient'>
      <DivContainerStyled_1.DivContainerStyled type='transparent'>
        <PhotoStyled_1.PhotoStyled src='src\assets\developer.gif' alt='gif about developer' type='special'/>
        <PStyled_1.PStyled type='clear' justify={true}>
          Siempre he sido una persona a la que le apasiona la tecnología, 
          desde pequeño me interesaba por todo aquello que tuviese una pantalla 
          y un teclado, me gustaba trastear, investigar y saber mucho sobre este mundo.
          Siempre tuve claro que quería dedicarme a la informática, por ello en 2018 decidí cursar
          un F.P.G.M en sistemas microinformáticos y redes, después, un F.P.G.S de Desarrollo de Aplicaciones
          Multiplataforma.
        </PStyled_1.PStyled>
        <PStyled_1.PStyled type='clear'>
          Después de haber cursado dos grados de formación profesional, decidí ser "full stack", pero...
          ¿Porqué full stack? Porque el desarrollo de aplicaciones con un
          back-end robusto y seguro, que, fusionado con un front-end responsivo,
          claro y llamativo para el cliente genera aplicaciones muy completas.
        </PStyled_1.PStyled>
        <PStyled_1.PStyled type='clear'>
          Pero no todo es teclear código, me gusta mucho el deporte, en especial el fútbol. También me gusta viajar,
          conocer lugares nuevos y sobre todo hacerlo rodeado de buena compañía como familia y amigos.<br />
          Aunque me gusta pasar tiempo rodeado, también disfruto mucho los momentos de "soledad" para disfrutar de tiempo
          conmigo mismo.       
        </PStyled_1.PStyled>
        <PStyled_1.PStyled type='clear'>
          ¡Ah y que no se me olvide, me encanta la música! Vivo con ella... <IconStyled_1.MusicIconStyled />
        </PStyled_1.PStyled>
        
      </DivContainerStyled_1.DivContainerStyled>
    </DivRowStyled_1.DivRowStyled>);
};
exports.About = About;
