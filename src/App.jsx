import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './portfolio.css'

import { bio, skills, experience, projects, contact } from './data/portfolio'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About bio={bio} skills={skills} />
        <Experience items={experience} />
        <Projects items={projects} />
        <Contact email={contact.email} socials={contact.socials} />
      </main>
      <Footer />
    </div>
  )
}
