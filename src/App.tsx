import { About } from './components/about/About'
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
    </>
  )
}

export default App
