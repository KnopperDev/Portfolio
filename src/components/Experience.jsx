import React from 'react'

export default function Experience({ items }) {
  return (
    <section id="experience" className="experience container">
      <h3>Experience</h3>
      <ul>
        {items.map((it) => (
          <li key={it.company} className="exp-item">
            <h4>{it.role} — {it.company}</h4>
            <p className="meta">{it.range} · {it.location}</p>
            <p>{it.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
