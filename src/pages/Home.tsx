import type { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Logo from '../components/Logo'
import PlayLink from '../components/PlayLink'
import {
  HabitWeek,
  Heatmap,
  PhonePreview,
  PromiseStack,
  WorkoutCard,
} from '../components/AppVisuals'

const FEATURES = {
  promises: { title: 'Promises', body: 'Make commitments that matter to you.' },
  habits: { title: 'Habits', body: 'Build consistency through repeated action.' },
  workouts: { title: 'Workouts', body: 'Track your training and progress.' },
  reflection: {
    title: 'Reflection',
    body: 'Review your history and consistency over time.',
  },
}

const STEPS = [
  { title: 'Make a promise', body: 'Decide what you intend to do.' },
  { title: 'Take the action', body: 'Show up and do the work.' },
  { title: 'Record it', body: 'Log what you actually did.' },
  { title: 'Review', body: 'See how consistent you’ve been.' },
]

const NOT_BUILT_AROUND = [
  'Social feeds',
  'Followers',
  'Public accountability',
  'Endless notifications',
  'Attention loops',
]

const BUILT_AROUND = ['Personal', 'Focused', 'Private', 'Intentional']

const PLANS = [
  {
    name: 'Free',
    note: 'Use Vrat for as long as you like.',
    items: [
      'All core Vrat functionality',
      'Local-first data',
      'Encrypted backups',
      'No account required',
      'Occasional ads',
    ],
  },
  {
    name: 'Lifetime',
    note: 'A one-time purchase through Google Play.',
    items: [
      'Everything in Free',
      'No advertisements',
      'One-time purchase',
      'No recurring subscription',
    ],
  },
]

const CONTROLS = [
  {
    title: 'Local-first storage',
    body: 'Records are kept on your device.',
    icon: 'M5 4h14v16H5zM9 18h6',
  },
  {
    title: 'Encrypted database',
    body: 'Designed to help protect data at rest.',
    icon: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
  },
  {
    title: 'Encrypted backups',
    body: 'Backup files are encrypted.',
    icon: 'M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8zM14 3v5h5M9.5 14.5h5v4h-5zM10.5 14.5V13a1.5 1.5 0 013 0v1.5',
  },
  {
    title: 'PIN-protected',
    body: 'Each backup uses a PIN you choose.',
    icon: 'M6 11h12v10H6zM8.5 11V8a3.5 3.5 0 017 0v3',
  },
  {
    title: 'Export your data',
    body: 'Create a backup file whenever you want.',
    icon: 'M12 15V4m0 0L8 8m4-4l4 4M5 14v5h14v-5',
  },
  {
    title: 'Delete your data',
    body: 'Remove entries, clear app data, or uninstall.',
    icon: 'M4 7h16M9 7V4h6v3M6.5 7l1 13h9l1-13',
  },
]

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12l4 4 10-10"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Feature({
  title,
  body,
  visual,
  className = '',
  delay = 0,
}: {
  title: string
  body: string
  visual: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <article
      className={`feature ${className}`}
      data-reveal
      style={{ '--d': delay } as CSSProperties}
    >
      <div className="feature__copy">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div className="feature__visual" aria-hidden="true">
        {visual}
      </div>
    </article>
  )
}

/** Where Vrat data lives — a plain diagram of the local-first model. */
function DataDiagram() {
  return (
    <figure className="diagram" data-reveal style={{ '--d': 1 } as CSSProperties}>
      <figcaption className="sr-only">
        Your promises, habits, and workouts are stored on your device in an
        encrypted database. When you want a copy, you create an encrypted
        backup protected by a PIN you choose, and you decide where that file is
        kept. There is no Vrat account and no Vrat-operated cloud.
      </figcaption>

      <div className="diagram__device" aria-hidden="true">
        <p className="diagram__label">Your device</p>
        <div className="diagram__db">
          <span className="diagram__icon">
            <Icon d="M6 11h12v10H6zM8.5 11V8a3.5 3.5 0 017 0v3" />
          </span>
          <div>
            <p className="diagram__title">Encrypted database</p>
            <p className="diagram__sub">Promises · Habits · Workouts</p>
          </div>
        </div>
      </div>

      <div className="diagram__flow" aria-hidden="true">
        <span className="diagram__line" />
        <span className="diagram__flowlabel">When you want a copy</span>
      </div>

      <div className="diagram__backup" aria-hidden="true">
        <span className="diagram__icon">
          <Icon d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8zM14 3v5h5" />
        </span>
        <div>
          <p className="diagram__title">Encrypted backup</p>
          <p className="diagram__sub">PIN you choose · Kept where you decide</p>
        </div>
      </div>

      <ul className="diagram__none" aria-hidden="true">
        <li>No Vrat account</li>
        <li>No Vrat-operated cloud</li>
      </ul>
    </figure>
  )
}

export default function Home() {
  return (
    <>
      <Seo
        title="Vrat — Keep the promises you make to yourself"
        description="Vrat is a calm, local-first Android app for keeping promises to yourself, building habits, and tracking workouts. Free to use with occasional ads; a one-time purchase removes them."
      />

      {/* Hero */}
      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="hero__brand hero__enter" style={{ '--d': 0 } as CSSProperties}>
              <Logo className="hero__mark" alt="Vrat logo" />
              <span>Vrat</span>
            </p>
            <h1 className="hero__enter" style={{ '--d': 1 } as CSSProperties}>
              Keep the promises you make to yourself.
            </h1>
            <p className="hero__lede hero__enter" style={{ '--d': 2 } as CSSProperties}>
              Vrat is a quiet Android app for making promises to yourself, building
              habits, tracking workouts, and seeing how consistently you follow
              through. No account needed — your records stay on your device.
            </p>
            <div className="hero__actions hero__enter" style={{ '--d': 3 } as CSSProperties}>
              <PlayLink className="btn btn--primary btn--lg" />
              <a href="#how-it-works" className="btn btn--ghost btn--lg">
                Learn how Vrat works
              </a>
            </div>
            <p className="hero__sub hero__enter" style={{ '--d': 4 } as CSSProperties}>
              <Link to="/privacy" className="link">
                How Vrat handles your data
              </Link>
            </p>
          </div>

          <div
            className="hero__visual"
            role="img"
            aria-label="Illustration of the Vrat app: a list of promises marked Kept and Pending, and a habit-consistency heatmap."
          >
            <div className="hero__phone">
              <PhonePreview />
            </div>
            <div className="hero__float" aria-hidden="true">
              <HabitWeek />
            </div>
          </div>
        </div>
      </section>

      {/* What is Vrat */}
      <section className="section" id="what-is-vrat">
        <div className="container">
          <div className="section__head section__head--split" data-reveal>
            <div>
              <span className="eyebrow">What is Vrat</span>
              <h2>A quiet system for keeping your word to yourself</h2>
            </div>
            <p>
              Vrat helps you make meaningful promises, build habits through
              repeated action, track workouts, and review your consistency —
              all in one calm, personal space.
            </p>
          </div>

          <div className="bento">
            <Feature
              {...FEATURES.promises}
              className="feature--wide feature--row"
              visual={<PromiseStack />}
            />
            <Feature {...FEATURES.habits} delay={1} visual={<HabitWeek />} />
            <Feature {...FEATURES.workouts} visual={<WorkoutCard />} />
            <Feature
              {...FEATURES.reflection}
              className="feature--wide feature--row"
              delay={1}
              visual={
                <div className="ui-card ui-reflect">
                  <div className="ui-card__row">
                    <p className="ui-card__label">Habit consistency</p>
                    <p className="ui-card__value">26 weeks</p>
                  </div>
                  <Heatmap weeks={26} />
                  <div className="ui-legend">
                    <span>Less</span>
                    <i className="l0" />
                    <i className="l1" />
                    <i className="l2" />
                    <i className="l3" />
                    <i className="l4" />
                    <span>More</span>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section section--anchor" id="how-it-works">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">How it works</span>
            <h2>Four simple steps, repeated</h2>
          </div>

          <ol className="steps" data-reveal>
            {STEPS.map((s, i) => (
              <li className="step" key={s.title} style={{ '--i': i } as CSSProperties}>
                <span className="step__num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why Vrat */}
      <section className="section">
        <div className="container why">
          <div className="why__head" data-reveal>
            <span className="eyebrow">Why Vrat</span>
            <h2>Built for you, not for an audience</h2>
            <p>
              Keeping your word to yourself is personal. Vrat is designed to
              stay out of the way and let you focus on following through.
            </p>
          </div>

          <div className="contrast" data-reveal style={{ '--d': 1 } as CSSProperties}>
            <div className="contrast__col contrast__col--muted">
              <h3>Vrat isn’t built around</h3>
              <ul>
                {NOT_BUILT_AROUND.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="contrast__col">
              <h3>Instead, it’s</h3>
              <ul>
                {BUILT_AROUND.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy / local-first + security & control */}
      <section className="band" id="privacy-approach">
        <div className="container">
          <div className="privacy">
            <div className="privacy__copy" data-reveal>
              <span className="eyebrow">Private by design</span>
              <h2>Your records stay with you</h2>
              <p>
                There is no Vrat account and nothing to sign in to. Your promises,
                habits, and workouts are stored on your device in an encrypted
                database — not in a Vrat-operated cloud. When you want a copy, you
                create an encrypted backup protected by a PIN you choose, and you
                decide where that file is kept.
              </p>
              <div className="callout">
                <p>
                  Your Vrat records are designed to remain local to your device.
                  Vrat also uses third-party services for advertising and purchase
                  processing; those services may process limited information
                  required for those functions.{' '}
                  <Link to="/privacy" className="link">
                    Read the Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>

            <DataDiagram />
          </div>

          <div className="controls-wrap">
            <div className="section__head section__head--split" data-reveal>
              <div>
                <span className="eyebrow">Security &amp; control</span>
                <h2>Your data, under your control</h2>
              </div>
              <p>
                Vrat is designed to help protect your records and to keep you in
                charge of them.
              </p>
            </div>

            <ul className="controls">
              {CONTROLS.map((c, i) => (
                <li key={c.title} data-reveal style={{ '--d': i % 3 } as CSSProperties}>
                  <span className="controls__icon">
                    <Icon d={c.icon} />
                  </span>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Free vs Lifetime */}
      <section className="section section--flush">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">Pricing</span>
            <h2>Free to use. Ad-free when you want it.</h2>
            <p>
              Use Vrat for free, for as long as you want. Free users may see
              occasional ads. A one-time lifetime purchase removes them.
            </p>
          </div>

          <div className="plans">
            {PLANS.map((p, i) => (
              <div
                className={`plan${i === 1 ? ' plan--lifetime' : ''}`}
                key={p.name}
                data-reveal
                style={{ '--d': i } as CSSProperties}
              >
                <div className="plan__head">
                  <h3>{p.name}</h3>
                  <p className="plan__note">{p.note}</p>
                </div>
                <ul>
                  {p.items.map((item) => (
                    <li key={item}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="plans__foot">
            The Lifetime price is shown in Google Play before you buy.
          </p>
        </div>
      </section>

      {/* Download CTA + closing */}
      <section className="section section--flush">
        <div className="container">
          <div className="cta" data-reveal>
            <div className="cta__glow" aria-hidden="true" />
            <Logo className="cta__mark" />
            <h2>Start keeping your word</h2>
            <p>Vrat is available for Android. Free to download and use.</p>
            <PlayLink className="btn btn--primary btn--lg" />
          </div>

          <div className="closing" data-reveal>
            <h2 className="closing__title">Your commitments are personal.</h2>
            <p>Vrat should feel the same way.</p>
            <div className="closing__links">
              <Link to="/privacy" className="link">Privacy Policy</Link>
              <Link to="/terms" className="link">Terms of Service</Link>
              <Link to="/contact" className="link">Contact</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
