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
import ErrorPage from './components/ErrorPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <HeroSection />
      <ProgramsSection />
      <FeaturesSection />
      <MissionVisionSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/errorPage" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
