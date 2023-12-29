import React, { useEffect, useState } from 'react'
import { DivContainerStyled } from '../common/DivContainerStyled'
import { TitleStyled } from '../common/TitleStyled'
import { Project } from './Project'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProjectInterface } from '../../interfaces/componentsInterface';
import { AppDispatch, useAppSelector } from '../../app/store';
import { getProjectData, getProjectError, getProjectStatus } from '../../features/projects/projectSlice';
import { useDispatch } from 'react-redux';
import { getProjectFromJSONThunk } from '../../features/projects/projectThunk';
import { LinkStyled } from '../common/LinkStyled';
import { LoadingStyled } from '../common/LoadingStyled';
import { PacmanLoader } from 'react-spinners';


export const Projects = () => {

    const dispatch: AppDispatch = useDispatch();
    const projectListStatus = useAppSelector<string>(getProjectStatus);
    const projectListData = useAppSelector<ProjectInterface[]>(getProjectData);
    const projectListError = useAppSelector<string | undefined>(getProjectError);
    const [spinner, setSpinner] = useState<boolean>(true)
    const [error, setError] = useState<string>()

    useEffect(() => {
        if (projectListStatus === "idle") {
            dispatch(getProjectFromJSONThunk());
        } else if (projectListStatus === "pending") {
            setSpinner(true)
        } else if (projectListStatus === "fulfilled") {
            setSpinner(false)
        } else if (projectListStatus === "rejected") {
            setError(projectListError)
        }
    }, [dispatch, projectListStatus, projectListError])

    return (
        <DivContainerStyled type='clear'>
            <TitleStyled>PROYECTOS</TitleStyled>

            {spinner ? <LoadingStyled><PacmanLoader color="#046E8F" /></LoadingStyled> : (

                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {projectListData.map((project: ProjectInterface) => (
                        <SwiperSlide>
                            <LinkStyled href={project.link}>
                                <Project img={project.img} alt={project.alt} title={project.title} desc={project.desc} />
                            </LinkStyled>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

        </DivContainerStyled>
    )
}
