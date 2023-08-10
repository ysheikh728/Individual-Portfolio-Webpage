import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroSection from './components/Herosection'
import AboutSection from './components/AboutSection'
import Projects from './components/Projects'
import Work from './components/Work'
import Skills from './components/Skills'
import Contacts from './components/Contact'
export default function Home() {
  return (
   <>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <Projects/>
    <Work/>
    <Skills/> 
    <Contacts/>
   </>
    
    
  )
}
