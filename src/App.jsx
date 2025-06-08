import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProgramsSection from './components/ProgramSection'
import FeaturesSection from './components/FeaturesSection'
import MissionVisionSection from './components/MissionVisionSection'
import TestimonialsSection from './components/TestinomialSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
   <>
   <ThemeProvider>
     <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <HeroSection />
        <ProgramsSection />
        <FeaturesSection />
        <MissionVisionSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
   </ThemeProvider>
   </>
  )
}

export default App
