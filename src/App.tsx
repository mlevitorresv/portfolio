import { About } from './components/about/About'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Projects } from './components/projects/Projects'
import { Skills } from './components/skills/Skills'
import { Training } from './components/training/Training'


function App() {
  return (
    <>
      <Header />
      <About />
      <Training />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
