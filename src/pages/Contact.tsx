import Seo from '../components/Seo'
import { CONTACT_EMAIL } from '../siteConfig'

const TOPICS = [
  'General support',
  'Privacy questions',
  'Data or privacy concerns',
  'Purchase or Lifetime access issues',
  'Feedback and ideas',
]

export default function Contact() {
  return (
    <div className="page container">
      <Seo
        title="Contact — Vrat"
        description="Contact the developer of Vrat for support, privacy questions, purchase or Lifetime access issues, and feedback."
      />

      <header className="page__header page__header--center">
        <span className="eyebrow">Get in touch</span>
        <h1>Contact</h1>
      </header>

      <div className="contact-card">
        <p>You can contact the developer of Vrat about:</p>
        <ul className="contact-topics">
          {TOPICS.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <a className="email-pill" href={`mailto:${CONTACT_EMAIL}`}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect
              x="3"
              y="5"
              width="18"
              height="14"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M4 7l8 6 8-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {CONTACT_EMAIL}
        </a>
        <p className="contact-note">
          For purchase issues, it helps to mention roughly when you bought
          Lifetime. Please don’t send payment card details — they aren’t
          needed. Vrat is maintained by an individual developer, so replies may
          take a little time.
        </p>
      </div>
    </div>
  )
}
