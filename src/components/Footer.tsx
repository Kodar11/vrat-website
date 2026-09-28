import { Link } from 'react-router-dom'
import { CONTACT_EMAIL, PLAY_STORE_URL } from '../siteConfig'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__brandline">
              <img src="/icon.png" width={26} height={26} alt="" aria-hidden="true" />
              Vrat
            </span>
            <p className="footer__tagline">
              Keep the promises you make to yourself.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
              <li>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__play"
                >
                  Get Vrat on Google Play
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M8 16L16 8M9 8h7v7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Vrat</span>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </div>
    </footer>
  )
}
