import React from 'react'

export default function Projects({ items }) {
  return (
    <section id="projects" className="projects container">
      <h3>Selected projects</h3>
      <div className="projects-grid">
        {items.map((p) => (
          <article key={p.title} className="project">
            <h4>{p.title}</h4>
            <p className="meta">{p.tech.join(' · ')}</p>
            <p>{p.description}</p>
            {p.link && (
              <p><a href={p.link} target="_blank" rel="noreferrer">Live</a></p>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
