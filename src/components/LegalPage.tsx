import type { ReactNode } from 'react'
import Seo from './Seo'

export type LegalSection = {
  id: string
  heading: string
  body: ReactNode
}

type LegalPageProps = {
  seoTitle: string
  seoDescription: string
  title: string
  lastUpdated: string
  intro: ReactNode
  sections: LegalSection[]
}

/**
 * Shared layout for long-form legal pages (Privacy, Terms). Renders a
 * readable, well-spaced document with a numbered table of contents so the
 * page never reads as a wall of text.
 */
export default function LegalPage({
  seoTitle,
  seoDescription,
  title,
  lastUpdated,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <div className="page container">
      <Seo title={seoTitle} description={seoDescription} />

      <header className="page__header">
        <h1>{title}</h1>
        <p className="page__meta">Last updated: {lastUpdated}</p>
        <div className="page__intro">{intro}</div>
      </header>

      <nav className="toc" aria-label="On this page">
        <h2>On this page</h2>
        <ol>
          {sections.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>
                {i + 1}. {s.heading}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <article className="prose">
        {sections.map((s, i) => (
          <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`}>
            <h2 id={`${s.id}-h`}>
              <span className="prose__num">{i + 1}.</span>
              {s.heading}
            </h2>
            {s.body}
          </section>
        ))}
      </article>
    </div>
  )
}
