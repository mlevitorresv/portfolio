"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const react_1 = __importDefault(require("react"));
const ProjectStyled_1 = require("./ProjectStyled");
const TitleStyled_1 = require("../common/TitleStyled");
const PStyled_1 = require("../common/PStyled");
const Project = (props) => {
    return (<ProjectStyled_1.ProjectStyled className='shadow slide-item transition-all'>
      <img src={props.img} alt={props.alt}/>
      <TitleStyled_1.TitleStyled color='white'>{props.title}</TitleStyled_1.TitleStyled>
      <PStyled_1.PStyled type='clear'>
        {props.desc}
      </PStyled_1.PStyled>
    </ProjectStyled_1.ProjectStyled>);
};
exports.Project = Project;
