import React from 'react'

export default function About({ bio, skills }) {
  return (
    <section id="about" className="about container">
      <h3>About me</h3>
      <p>{bio}</p>
      <h4>Skills</h4>
      <ul className="skills">
        {skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  )
}
