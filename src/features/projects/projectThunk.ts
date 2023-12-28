import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProjectInterface } from "../../interfaces/componentsInterface";
import projects from '../../data/projects.json'


export const getProjectFromJSONThunk = createAsyncThunk<ProjectInterface[], void, {state: any, rejectValue: string}>("project/getProjectFromJson", async(): Promise<ProjectInterface[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(projects)
        }, 2000)
    })
})