"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeLine = void 0;
const react_1 = __importDefault(require("react"));
const react_vertical_timeline_component_1 = require("react-vertical-timeline-component");
require("react-vertical-timeline-component/style.min.css");
const PStyled_1 = require("../common/PStyled");
const im_1 = require("react-icons/im");
const md_1 = require("react-icons/md");
const TimeLine = () => {
    return (<react_vertical_timeline_component_1.VerticalTimeline lineColor='#0090c1'>
            <react_vertical_timeline_component_1.VerticalTimelineElement className="vertical-timeline-element--study" contentStyle={{ background: '#0090c1', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid #0090c1' }} date="09/2018 - 06/2020" iconStyle={{ background: '#0090c1', color: '#fff' }} icon={<im_1.ImBooks />}>
                <PStyled_1.PStyled type='clear'>
                    F.P.G.M Sistemas Microinformáticos y Redes
                </PStyled_1.PStyled>
            </react_vertical_timeline_component_1.VerticalTimelineElement>

            <react_vertical_timeline_component_1.VerticalTimelineElement className="vertical-timeline-element--study" contentStyle={{ background: '#0090c1', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid #0090c1' }} date="09/2020 - 06/2022" iconStyle={{ background: '#0090c1', color: '#fff' }} icon={<im_1.ImBooks />}>
                <PStyled_1.PStyled type='clear'>
                    F.P.G.S Desarrollo de Aplicaciones Multiplataforma
                </PStyled_1.PStyled>
            </react_vertical_timeline_component_1.VerticalTimelineElement>

            <react_vertical_timeline_component_1.VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: '#0090c1', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid #0090c1' }} date="07/2022 - 05/2023" iconStyle={{ background: '#0090c1', color: '#fff' }} icon={<md_1.MdComputer />}>
                <PStyled_1.PStyled type='clear'>
                    Técnico Auxiliar de informática (EXCMO. AYTO DE PALENCIA)
                </PStyled_1.PStyled>
            </react_vertical_timeline_component_1.VerticalTimelineElement>

            <react_vertical_timeline_component_1.VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: '#0090c1', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid #0090c1' }} date="06/2023 - 06/2023" iconStyle={{ background: '#0090c1', color: '#fff' }} icon={<md_1.MdComputer />}>
                <PStyled_1.PStyled type='clear'>
                    Técnico en Operaciones de Sistemas Informáticos
                </PStyled_1.PStyled>
            </react_vertical_timeline_component_1.VerticalTimelineElement>

            <react_vertical_timeline_component_1.VerticalTimelineElement className="vertical-timeline-element--study" contentStyle={{ background: '#0090c1', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid #0090c1' }} date="10/2023 - Actualidad" iconStyle={{ background: '#0090c1', color: '#fff' }} icon={<im_1.ImBooks />}>
                <PStyled_1.PStyled type='clear'>
                    Training Full-Stack Web (Oxygen Academy)
                </PStyled_1.PStyled>
            </react_vertical_timeline_component_1.VerticalTimelineElement>
        </react_vertical_timeline_component_1.VerticalTimeline>);
};
exports.TimeLine = TimeLine;
