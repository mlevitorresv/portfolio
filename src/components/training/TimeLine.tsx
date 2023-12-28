import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { PStyled } from '../common/PStyled';
import { ImBooks } from "react-icons/im";
import { MdComputer } from "react-icons/md";



export const TimeLine = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--study"
                contentStyle={{ background: '#0090c1', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #0090c1' }}
                date="09/2018 - 06/2020"
                iconStyle={{ background: '#0090c1', color: '#fff' }}
                icon={<ImBooks />}
            >
                <PStyled type='clear'>
                    F.P.G.M Sistemas Microinformáticos y Redes (I.E.S Venancio Blanco)
                </PStyled>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--study"
                contentStyle={{ background: '#0090c1', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #0090c1' }}
                date="09/2020 - 06/2022"
                iconStyle={{ background: '#0090c1', color: '#fff' }}
                icon={<ImBooks />}
            >
                <PStyled type='clear'>
                    F.P.G.S Desarrollo de Aplicaciones Multiplataforma (I.E.S Venancio Blanco)
                </PStyled>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#0090c1', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #0090c1' }}
                date="07/2022 - 05/2023"
                iconStyle={{ background: '#0090c1', color: '#fff' }}
                icon={<MdComputer />}
            >
                <PStyled type='clear'>
                    Técnico Auxiliar de informática (EXCMO. AYTO DE PALENCIA)
                </PStyled>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#0090c1', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #0090c1' }}
                date="06/2023 - 06/2023"
                iconStyle={{ background: '#0090c1', color: '#fff' }}
                icon={<MdComputer />}
            >
                <PStyled type='clear'>
                    Técnico en Operaciones de Sistemas Informáticos (ZAIDAN 2010 S.L.)
                </PStyled>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--study"
                contentStyle={{ background: '#0090c1', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #0090c1' }}
                date="10/2023 - Actualidad"
                iconStyle={{ background: '#0090c1', color: '#fff' }}
                icon={<ImBooks />}
            >
                <PStyled type='clear'>
                    Training Full-Stack Web (Oxygen Academy)
                </PStyled>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}
