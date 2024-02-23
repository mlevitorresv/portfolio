"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const About_1 = require("./components/about/About");
const Contact_1 = require("./components/contact/Contact");
const Footer_1 = require("./components/footer/Footer");
const Header_1 = require("./components/header/Header");
const Projects_1 = require("./components/projects/Projects");
const Skills_1 = require("./components/skills/Skills");
const Training_1 = require("./components/training/Training");
const store_1 = require("./app/store");
const Presentation_1 = require("./components/presentation/Presentation");
function App() {
    return (<>
      <react_redux_1.Provider store={store_1.store}>
        <Header_1.Header />
        <Presentation_1.Presentation />
        <About_1.About />
        <Training_1.Training />
        <Skills_1.Skills />
        <Projects_1.Projects />
        <Contact_1.Contact />
        <Footer_1.Footer />
      </react_redux_1.Provider>
    </>);
}
exports.default = App;
