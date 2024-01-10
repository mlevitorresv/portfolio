"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectError = exports.getProjectStatus = exports.getProjectData = exports.projectSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const projectThunk_1 = require("./projectThunk");
const initialState = {
    data: [],
    status: 'idle',
    error: undefined
};
exports.projectSlice = (0, toolkit_1.createSlice)({
    name: "project",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(projectThunk_1.getProjectFromJSONThunk.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.data = action.payload;
        })
            .addCase(projectThunk_1.getProjectFromJSONThunk.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error.message;
        })
            .addCase(projectThunk_1.getProjectFromJSONThunk.pending, (state, action) => {
            state.status = "pending";
        });
    }
});
const getProjectData = (state) => state.project.data;
exports.getProjectData = getProjectData;
const getProjectStatus = (state) => state.project.status;
exports.getProjectStatus = getProjectStatus;
const getProjectError = (state) => state.project.error;
exports.getProjectError = getProjectError;
