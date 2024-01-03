import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { LoadingStyled } from '../common/LoadingStyled';
import { PacmanLoader } from 'react-spinners';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { AppDispatch, useAppSelector } from '../../app/store'
import { useDispatch } from 'react-redux'
import { ProjectInterface } from '../../interfaces/componentsInterface'
import { getProjectData, getProjectError, getProjectStatus } from '../../features/projects/projectSlice'
import { getProjectFromJSONThunk } from '../../features/projects/projectThunk'
import { Project } from './Project';
import { LinkStyled } from '../common/LinkStyled';

export const Carousel = () => {

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

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        arrows: false
    }

    return (
        <>
            {spinner ? (
                <LoadingStyled>
                    <PacmanLoader color="#046E8F" />
                </LoadingStyled>
            ) : (
                <div className='flex items-center justify-center'>
                    <div className="w-full">
                        <Slider {...settings} >
                            {projectListData.map((project: ProjectInterface) => (
                                <LinkStyled href={project.link}>
                                    <Project img={project.img} alt={project.alt} title={project.title} desc={project.desc} />
                                </LinkStyled>
                            ))}
                        </Slider>
                    </div>
                </div>
            )}

        </>
    )
}
