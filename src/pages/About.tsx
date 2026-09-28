import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

const IS = [
  'Make meaningful promises to yourself.',
  'Build habits through small, repeatable actions.',
  'Track workouts and training sessions.',
  'Maintain consistency over time.',
  'Review your progress and history.',
  'Stay accountable to yourself.',
]

const IS_NOT = [
  'Not a social network.',
  'Not a medical service.',
  'Not a therapist.',
  'Not a professional fitness coach.',
  'Not a productivity marketplace.',
]

export default function About() {
  return (
    <div className="page about">
      <Seo
        title="About — Vrat"
        description="Why Vrat exists, what it is and isn't, why it's local-first, and how it's funded. Vrat is a personal integrity app built around a simple idea: your word to yourself matters."
      />

      <header className="container about__hero" data-reveal>
        <span className="eyebrow">About</span>
        <h1>About Vrat</h1>
        <p className="about__statement">
          Vrat is built around a simple belief:
          <strong> your relationship with your own word matters.</strong>
        </p>
      </header>

      <div className="container">
        <section className="story" data-reveal>
          <h2>Why Vrat exists</h2>
          <div className="story__body prose">
            <p className="story__lead">
              Most of us make quiet promises to ourselves — to move more, to stay
              consistent, to follow through on the things we say we care about.
              Those promises rarely fail for lack of intention. They fail because
              there is nothing simple holding us to them. Vrat is a calm, personal
              system for exactly that: state what you intend to do, do it, and
              see honestly how often you keep your word.
            </p>
          </div>
        </section>

        <div className="about__split">
          <section className="about__card" data-reveal>
            <h2>What Vrat is</h2>
            <p>
              Vrat is a personal integrity and accountability app, with habit and
              workout tracking built in. It helps you:
            </p>
            <ul className="about__list about__list--is">
              {IS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section
            className="about__card about__card--muted"
            data-reveal
            style={{ '--d': 1 } as CSSProperties}
          >
            <h2>What Vrat is not</h2>
            <ul className="about__list about__list--not">
              {IS_NOT.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="story" data-reveal>
          <h2>Why local-first</h2>
          <div className="story__body prose">
            <p>
              The promises you make to yourself are personal, so Vrat is designed
              to keep your records primarily on your own device, in an encrypted
              database. There are no accounts to create and nothing to sign in
              to. When you want a copy, you make an encrypted, PIN-protected
              backup and decide where it lives. Vrat is meant to feel like a
              private notebook that happens to help you follow through.
            </p>
            <p>
              To learn exactly how information is handled — including by the
              services used for ads and purchases — see the{' '}
              <Link to="/privacy">Privacy Policy</Link>.
            </p>
          </div>
        </section>

        <blockquote className="pullquote" data-reveal>
          <p>
            Vrat is designed to be simple, personal, and useful — without
            unnecessary complexity.
          </p>
        </blockquote>

        <section className="story" data-reveal>
          <h2>How Vrat is funded</h2>
          <div className="story__body prose">
            <p>
              Vrat is available to use for free with occasional advertising. A
              one-time Lifetime purchase removes advertisements without
              introducing a recurring subscription.
            </p>
          </div>
        </section>

        <section className="story" data-reveal>
          <h2>Who builds Vrat</h2>
          <div className="story__body prose">
            <p>
              Vrat is developed and maintained by an individual developer as a
              personal project. It is built with care and shipped honestly: it
              does what it says, and no more.
            </p>
            <p>
              Vrat is a tool for personal reflection and self-accountability. It
              is not a medical, therapeutic, or professional coaching service, and
              it does not promise specific results. What it offers is a
              thoughtful, private place to keep your word to yourself.
            </p>
            <p>
              Questions or feedback? <Link to="/contact">Get in touch</Link>.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
