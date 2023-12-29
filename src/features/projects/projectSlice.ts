import { createSlice } from "@reduxjs/toolkit";
import { ProjectSliceInterface } from "../../interfaces/projectSliceInterface";
import { getProjectFromJSONThunk } from "./projectThunk";
import { RootState } from "../../app/store";
import { ProjectInterface } from "../../interfaces/componentsInterface";



const initialState: ProjectSliceInterface = {
    data: [],
    status: 'idle',
    error: undefined
}

export const projectSlice = createSlice({
    name: "project",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProjectFromJSONThunk.fulfilled, (state, action): void => {
            state.status = "fulfilled"
            state.data = action.payload
        })
        .addCase(getProjectFromJSONThunk.rejected, (state, action): void => {
            state.status = "rejected"
            state.error = action.error.message
        })
        .addCase(getProjectFromJSONThunk.pending, (state, action): void => {
            state.status = "pending"
        })
    }

})


export const getProjectData = (state: RootState): ProjectInterface[] => state.project.data;
export const getProjectStatus = (state: RootState): string => state.project.status;
export const getProjectError  = (state: RootState): string | undefined => state.project.error;
