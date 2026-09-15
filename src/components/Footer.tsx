import { Link } from 'react-router-dom'

const FOOTER_EMAIL = 'tanmaychavan13@gmail.com'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__brandline">
              <img src="/icon.png" width={26} height={26} alt="" aria-hidden="true" />
              Vrat
            </span>
            <p className="footer__tagline">
              Keep the promises you make to yourself.
            </p>
          </div>

          <div className="footer__cols">
            <nav className="footer__col" aria-label="Pages">
              <h4>Pages</h4>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>

            <nav className="footer__col" aria-label="Legal">
              <h4>Legal</h4>
              <ul>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms">Terms of Service</Link>
                </li>
              </ul>
            </nav>

            <div className="footer__col">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href={`mailto:${FOOTER_EMAIL}`}>{FOOTER_EMAIL}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">© 2026 Vrat</div>
      </div>
    </footer>
  )
}
