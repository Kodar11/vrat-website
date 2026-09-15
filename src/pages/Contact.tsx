import Seo from '../components/Seo'

const CONTACT_EMAIL = 'tanmaychavan13@gmail.com'

export default function Contact() {
  return (
    <div className="page container">
      <Seo
        title="Contact — Vrat"
        description="Contact the developer of Vrat for questions, support, privacy requests, or feedback."
      />

      <header className="page__header page__header--center">
        <span className="eyebrow">Get in touch</span>
        <h1>Contact</h1>
      </header>

      <div className="contact-card">
        <p>
          For questions, support, privacy requests, or feedback about Vrat,
          contact us at:
        </p>
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
          Vrat is maintained by an individual developer, so replies may take a
          little time. Thanks for your patience.
        </p>
      </div>
    </div>
  )
}
