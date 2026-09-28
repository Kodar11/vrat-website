import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Logo from '../components/Logo'
import { PLAY_STORE_URL } from '../siteConfig'

const FEATURES = [
  {
    title: 'Promises',
    body: 'Make commitments that matter to you.',
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
    body: 'Build consistency through repeated action.',
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
    body: 'Track your training and progress.',
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
    body: 'Review your history and consistency over time.',
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
  { title: 'Local-first storage', body: 'Records are kept on your device.' },
  { title: 'Encrypted database', body: 'Designed to help protect data at rest.' },
  { title: 'Encrypted backups', body: 'Backup files are encrypted.' },
  { title: 'PIN-protected', body: 'Each backup uses a PIN you choose.' },
  { title: 'Export your data', body: 'Create a backup file whenever you want.' },
  {
    title: 'Delete your data',
    body: 'Remove entries, clear app data, or uninstall.',
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

function PlayLink({ className }: { className: string }) {
  return (
    <a
      href={PLAY_STORE_URL}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 20h14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Get Vrat on Google Play
    </a>
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
      <section className="hero container">
        <Logo className="hero__mark" alt="Vrat logo" />
        <h1>Vrat</h1>
        <p className="hero__tagline">Keep the promises you make to yourself.</p>
        <p className="hero__lede">
          Vrat is a quiet Android app for making promises to yourself, building
          habits, tracking workouts, and seeing how consistently you follow
          through. No account needed — your records stay on your device.
        </p>
        <div className="hero__actions">
          <PlayLink className="btn btn--primary" />
          <a href="#how-it-works" className="btn btn--ghost">
            Learn how Vrat works
          </a>
        </div>
        <p className="hero__sub">
          <Link to="/privacy">How Vrat handles your data</Link>
        </p>
      </section>

      {/* What is Vrat */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">What is Vrat</span>
            <h2>A quiet system for keeping your word to yourself</h2>
            <p>
              Vrat helps you make meaningful promises, build habits through
              repeated action, track workouts, and review your consistency —
              all in one calm, personal space.
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

      {/* How it works */}
      <section className="section section--anchor" id="how-it-works">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">How it works</span>
            <h2>Four simple steps, repeated</h2>
          </div>

          <ol className="steps">
            {STEPS.map((s, i) => (
              <li className="step" key={s.title}>
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
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">Why Vrat</span>
            <h2>Built for you, not for an audience</h2>
            <p>
              Keeping your word to yourself is personal. Vrat is designed to
              stay out of the way and let you focus on following through.
            </p>
          </div>

          <div className="contrast">
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

      {/* Privacy / local-first */}
      <section className="trust">
        <div className="container trust__inner">
          <span className="eyebrow">Private by design</span>
          <h2>Your records stay with you</h2>
          <p>
            There is no Vrat account and nothing to sign in to. Your promises,
            habits, and workouts are stored on your device in an encrypted
            database — not in a Vrat-operated cloud. When you want a copy, you
            create an encrypted backup protected by a PIN you choose, and you
            decide where that file is kept.
          </p>
          <div className="callout trust__note">
            <p>
              Your Vrat records are designed to remain local to your device.
              Vrat also uses third-party services for advertising and purchase
              processing; those services may process limited information
              required for those functions.{' '}
              <Link to="/privacy">Read the Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Free vs Lifetime */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">Pricing</span>
            <h2>Free to use. Ad-free when you want it.</h2>
            <p>
              Use Vrat for free, for as long as you want. Free users may see
              occasional ads. A one-time lifetime purchase removes them.
            </p>
          </div>

          <div className="plans">
            {PLANS.map((p) => (
              <div className="plan" key={p.name}>
                <h3>{p.name}</h3>
                <p className="plan__note">{p.note}</p>
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

      {/* Security & data control */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">Security &amp; control</span>
            <h2>Your data, under your control</h2>
            <p>
              Vrat is designed to help protect your records and to keep you in
              charge of them.
            </p>
          </div>

          <ul className="controls">
            {CONTROLS.map((c) => (
              <li key={c.title}>
                <span className="card__icon" aria-hidden="true">
                  <Check />
                </span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Download CTA */}
      <section className="section">
        <div className="container cta">
          <h2>Start keeping your word</h2>
          <p>Vrat is available for Android. Free to download and use.</p>
          <PlayLink className="btn btn--primary btn--lg" />
        </div>
      </section>

      {/* Final trust */}
      <section className="trust">
        <div className="container trust__inner">
          <h2>Your commitments are personal.</h2>
          <p>Vrat should feel the same way.</p>
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
