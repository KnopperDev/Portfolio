import React from 'react'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="logo">Nick Swanenberg</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
