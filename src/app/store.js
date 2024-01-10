"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppSelector = exports.useAppDispatch = exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const react_redux_1 = require("react-redux");
const react_redux_2 = require("react-redux");
const projectSlice_1 = require("../features/projects/projectSlice");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        project: projectSlice_1.projectSlice.reducer
    }
});
exports.useAppDispatch = react_redux_1.useDispatch;
exports.useAppSelector = react_redux_2.useSelector;
