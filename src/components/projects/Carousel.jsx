"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carousel = void 0;
const react_1 = __importStar(require("react"));
const react_slick_1 = __importDefault(require("react-slick"));
const LoadingStyled_1 = require("../common/LoadingStyled");
const react_spinners_1 = require("react-spinners");
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
const store_1 = require("../../app/store");
const react_redux_1 = require("react-redux");
const projectSlice_1 = require("../../features/projects/projectSlice");
const projectThunk_1 = require("../../features/projects/projectThunk");
const Project_1 = require("./Project");
const LinkStyled_1 = require("../common/LinkStyled");
const Carousel = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const projectListStatus = (0, store_1.useAppSelector)(projectSlice_1.getProjectStatus);
    const projectListData = (0, store_1.useAppSelector)(projectSlice_1.getProjectData);
    const projectListError = (0, store_1.useAppSelector)(projectSlice_1.getProjectError);
    const [spinner, setSpinner] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        if (projectListStatus === "idle") {
            dispatch((0, projectThunk_1.getProjectFromJSONThunk)());
        }
        else if (projectListStatus === "pending") {
            setSpinner(true);
        }
        else if (projectListStatus === "fulfilled") {
            setSpinner(false);
        }
        else if (projectListStatus === "rejected") {
            setError(projectListError);
        }
    }, [dispatch, projectListStatus, projectListError]);
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
    };
    return (<>
            {spinner ? (<LoadingStyled_1.LoadingStyled>
                    <react_spinners_1.PacmanLoader color="#046E8F"/>
                </LoadingStyled_1.LoadingStyled>) : (<div className='flex items-center justify-center'>
                    <div className="w-full">
                        <react_slick_1.default {...settings}>
                            {projectListData.map((project) => (<LinkStyled_1.LinkStyled href={project.link}>
                                    <Project_1.Project img={project.img} alt={project.alt} title={project.title} desc={project.desc}/>
                                </LinkStyled_1.LinkStyled>))}
                        </react_slick_1.default>
                    </div>
                </div>)}

        </>);
};
exports.Carousel = Carousel;
