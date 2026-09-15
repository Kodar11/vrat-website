import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Logo from '../components/Logo'

const FEATURES = [
  {
    title: 'Promises',
    body: 'Make commitments that matter.',
    icon: (
      <path
        d="M5 12l4 4 10-10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Habits',
    body: 'Build consistency through daily action.',
    icon: (
      <path
        d="M4 15l5-5 4 4 7-7M4 20h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Workouts',
    body: 'Track training and progress.',
    icon: (
      <path
        d="M6.5 6.5l11 11M4 9l2-2m14 8l-2 2M8 4l2 2M14 18l2 2M3.5 12.5l2-2m11 3l2-2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Reflection',
    body: 'Review your history and stay accountable.',
    icon: (
      <path
        d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
]

export default function Home() {
  return (
    <>
      <Seo
        title="Vrat — Keep the promises you make to yourself"
        description="Vrat is a personal integrity system designed to help you turn intentions into actions."
      />

      {/* Hero */}
      <section className="hero container">
        <Logo className="hero__mark" alt="Vrat logo" />
        <h1>Vrat</h1>
        <p className="hero__tagline">Keep the promises you make to yourself.</p>
        <p className="hero__lede">
          Vrat is a personal integrity system designed to help you turn
          intentions into actions.
        </p>
        <div className="hero__actions">
          <Link to="/about" className="btn btn--primary">
            Learn about Vrat
          </Link>
          <Link to="/privacy" className="btn btn--ghost">
            Privacy Policy
          </Link>
        </div>
      </section>

      {/* What is Vrat */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">What is Vrat</span>
            <h2>A quiet system for keeping your word</h2>
            <p>
              Vrat helps you make meaningful promises, build habits, track
              workouts, stay consistent, and review the progress you’ve made.
            </p>
          </div>

          <div className="grid">
            {FEATURES.map((f) => (
              <div className="card" key={f.title}>
                <span className="card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    {f.icon}
                  </svg>
                </span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="trust">
        <div className="container trust__inner">
          <span className="eyebrow">Private by design</span>
          <h2>Your data stays with you</h2>
          <p>
            Vrat has no accounts and no cloud sync. Your information is stored
            locally on your device in an encrypted database, and you can create
            encrypted backups protected by a PIN only you know.
          </p>
          <div className="trust__links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </section>
    </>
  )
}
