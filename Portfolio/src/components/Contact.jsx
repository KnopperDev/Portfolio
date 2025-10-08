import React from 'react'

export default function Contact({ email, socials }) {
  return (
    <section id="contact" className="contact container">
      <h3>Contact</h3>
      <p>Email me at: <a href={`mailto:${email}`}>{email}</a></p>
      <ul className="socials">
        {socials.map((s) => (
          <li key={s.name}><a href={s.url} target="_blank" rel="noreferrer">{s.name}</a></li>
        ))}
      </ul>
    </section>
  )
}
