import React from 'react'
import { DivContainerStyled } from '../common/DivContainerStyled'
import { TitleStyled } from '../common/TitleStyled'
import { Project } from './Project'
import { Swiper, SwiperSlide } from 'swiper/react';
import projects from '../../data/projects.json'
import { ProjectInterface } from '../../interfaces/componentsInterface';


export const Projects = () => {

    return (
        <DivContainerStyled type='clear'>
            <TitleStyled>PROYECTOS</TitleStyled>

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <Project img={projects[0].img} alt={projects[0].alt} title={projects[0].title} desc={projects[0].desc} />
                </SwiperSlide>
                
                <SwiperSlide>
                    <Project img={projects[0].img} alt={projects[0].alt} title={projects[0].title} desc={projects[0].desc} />
                </SwiperSlide>
            </Swiper>

        </DivContainerStyled>
    )
}
