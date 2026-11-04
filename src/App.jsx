import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import About from './components/About'
import Tracks from './components/Tracks'
import Speakers from './components/Speakers'
import CallForPapers from './components/CallForPapers'
import ImportantDates from './components/ImportantDates'
import Registration from './components/Registration'
import Committee from './components/Committee'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './styles/global.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/sections.css'
import './styles/responsive.css'

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Highlights />
        <About />
        <Tracks />
        <Speakers />
        <CallForPapers />
        <ImportantDates />
        <Registration />
        <Committee />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

