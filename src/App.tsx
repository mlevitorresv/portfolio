import { Provider } from 'react-redux'
import { About } from './components/about/About'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Projects } from './components/projects/Projects'
import { Skills } from './components/skills/Skills'
import { Training } from './components/training/Training'
import { store } from './app/store'
import { Presentation } from './components/presentation/Presentation'


function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Presentation />
        <About />
        <Training />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Provider>
    </>
  )
}

export default App
