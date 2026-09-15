import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function About() {
  return (
    <div className="page container">
      <Seo
        title="About — Vrat"
        description="Vrat is a personal integrity system built around a simple idea: your word matters. Learn what Vrat is and who builds it."
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
          <p>
            Most of us make quiet promises to ourselves — to move more, to stay
            consistent, to follow through on the things we say we care about.
            Vrat is a calm, personal space for those commitments. It helps you
            state what you intend to do, then supports you in actually doing it.
          </p>
        </section>

        <section>
          <h2>What Vrat helps you do</h2>
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
          <h2>Local-first by design</h2>
          <p>
            Vrat is designed as a local-first personal system. Your promises,
            habits, workout records, and progress are stored on your own device
            rather than on remote servers. There are no accounts to create and
            nothing to sign in to — Vrat is meant to feel like a private
            notebook that happens to help you follow through.
          </p>
          <p>
            To learn how your information is handled, see the{' '}
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
