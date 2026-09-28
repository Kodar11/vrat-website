import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function About() {
  return (
    <div className="page container">
      <Seo
        title="About — Vrat"
        description="Why Vrat exists, what it is and isn't, why it's local-first, and how it's funded. Vrat is a personal integrity app built around a simple idea: your word to yourself matters."
      />

      <header className="page__header page__header--center">
        <span className="eyebrow">About</span>
        <h1>About Vrat</h1>
        <p className="page__intro">
          Vrat is built around a simple belief:
          <strong> your relationship with your own word matters.</strong>
        </p>
      </header>

      <article className="prose">
        <section>
          <h2>Why Vrat exists</h2>
          <p>
            Most of us make quiet promises to ourselves — to move more, to stay
            consistent, to follow through on the things we say we care about.
            Those promises rarely fail for lack of intention. They fail because
            there is nothing simple holding us to them. Vrat is a calm, personal
            system for exactly that: state what you intend to do, do it, and
            see honestly how often you keep your word.
          </p>
        </section>

        <section>
          <h2>What Vrat is</h2>
          <p>
            Vrat is a personal integrity and accountability app, with habit and
            workout tracking built in. It helps you:
          </p>
          <ul>
            <li>Make meaningful promises to yourself.</li>
            <li>Build habits through small, repeatable actions.</li>
            <li>Track workouts and training sessions.</li>
            <li>Maintain consistency over time.</li>
            <li>Review your progress and history.</li>
            <li>Stay accountable to yourself.</li>
          </ul>
        </section>

        <section>
          <h2>What Vrat is not</h2>
          <ul>
            <li>Not a social network.</li>
            <li>Not a medical service.</li>
            <li>Not a therapist.</li>
            <li>Not a professional fitness coach.</li>
            <li>Not a productivity marketplace.</li>
          </ul>
        </section>

        <section>
          <h2>Why local-first</h2>
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
          <div className="callout" style={{ marginTop: 20 }}>
            <p>
              Vrat is designed to be simple, personal, and useful — without
              unnecessary complexity.
            </p>
          </div>
        </section>

        <section>
          <h2>How Vrat is funded</h2>
          <p>
            Vrat is available to use for free with occasional advertising. A
            one-time Lifetime purchase removes advertisements without
            introducing a recurring subscription.
          </p>
        </section>

        <section>
          <h2>Who builds Vrat</h2>
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
        </section>
      </article>
    </div>
  )
}
