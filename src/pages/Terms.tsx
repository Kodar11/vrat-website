import { Link } from 'react-router-dom'
import LegalPage, { type LegalSection } from '../components/LegalPage'
import { CONTACT_EMAIL, LEGAL_LAST_UPDATED } from '../siteConfig'

const sections: LegalSection[] = [
  {
    id: 'acceptance',
    heading: 'Acceptance of Terms',
    body: (
      <p>
        By downloading, installing, or using the Vrat app ("Vrat" or the
        "app"), you agree to these Terms of Service. If you do not agree,
        please do not use the app.
      </p>
    ),
  },
  {
    id: 'description',
    heading: 'Description of Vrat',
    body: (
      <p>
        Vrat is a personal integrity app that helps you make and keep promises
        to yourself, build habits, track workouts, and review your progress.
        Vrat is local-first: it has no user accounts, and your records are
        stored on your device. Vrat is developed and maintained by an
        individual developer ("we", "us").
      </p>
    ),
  },
  {
    id: 'eligibility',
    heading: 'Eligibility and Appropriate Use',
    body: (
      <>
        <p>
          You may use Vrat for your own personal, lawful purposes. Vrat is not
          directed to children under 13. If you are under the age of majority
          where you live, you should use Vrat — and make any purchase — only
          with the involvement of a parent or guardian.
        </p>
        <p>
          You agree not to misuse the app, including by interfering with its
          intended operation, tampering with its advertising or purchase
          features, or using it in a way that violates applicable laws.
        </p>
      </>
    ),
  },
  {
    id: 'free-and-lifetime',
    heading: 'Free and Lifetime Versions',
    body: (
      <ul>
        <li>Vrat can be used free of charge.</li>
        <li>Free users may see advertisements.</li>
        <li>
          Vrat also offers an optional one-time Lifetime purchase that removes
          Vrat's advertisements.
        </li>
        <li>Lifetime is not a subscription and does not renew.</li>
        <li>
          Core Vrat functionality is available in both the free and Lifetime
          versions.
        </li>
      </ul>
    ),
  },
  {
    id: 'lifetime-purchase',
    heading: 'Lifetime Ad-Free Purchase',
    body: (
      <>
        <ul>
          <li>Lifetime is purchased through Google Play.</li>
          <li>
            The price is the one presented to you in Google Play at the time of
            purchase.
          </li>
          <li>It is a one-time payment. There are no recurring charges.</li>
          <li>
            Lifetime removes Vrat's advertisements for as long as Vrat, Google
            Play, and the services that support the purchase continue to be
            available. "Lifetime" refers to the lifetime of the app, not of any
            person.
          </li>
          <li>
            You may be able to restore Lifetime after reinstalling or on a new
            device, using the Google Play account you bought it with.
          </li>
          <li>
            Payments, cancellations, and refunds are handled by Google Play and
            are subject to Google Play's policies. If you have a problem with
            your purchase, you can also <Link to="/contact">contact us</Link>.
          </li>
        </ul>
        <p>
          Nothing in these terms limits any rights you have under applicable
          consumer-protection law.
        </p>
      </>
    ),
  },
  {
    id: 'advertising',
    heading: 'Advertising',
    body: (
      <>
        <p>
          The free version of Vrat shows ads provided by Google AdMob. We intend
          to keep advertising limited and unobtrusive, and we avoid placing ads
          over important moments in the app. However:
        </p>
        <ul>
          <li>
            Ad content, availability, and behavior — including how long an ad
            runs — are controlled by the advertising provider.
          </li>
          <li>We may change ad formats or frequency over time.</li>
          <li>
            We are not responsible for the content of third-party ads or for
            products and services they promote.
          </li>
        </ul>
        <p>
          How advertising affects your information is described in the{' '}
          <Link to="/privacy">Privacy Policy</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'responsibilities',
    heading: 'User Responsibilities',
    body: (
      <>
        <p>You are responsible for:</p>
        <ul>
          <li>The information you enter into the app.</li>
          <li>Keeping your device secure.</li>
          <li>
            Safeguarding your backup PIN and keeping copies of any backups that
            matter to you.
          </li>
          <li>
            Deciding whether any activity you track — including physical
            exercise — is appropriate and safe for you.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'backups',
    heading: 'Local Data and Backups',
    body: (
      <>
        <p>
          Your Vrat records are stored on your device. Vrat may allow you to
          create encrypted backups, protected by a PIN that you choose. Please
          note:
        </p>
        <ul>
          <li>You must remember your backup PIN.</li>
          <li>
            Vrat cannot recover an encrypted backup if the required PIN is lost.
          </li>
          <li>
            You are responsible for maintaining your own copies of any important
            backups.
          </li>
          <li>Vrat does not provide cloud recovery of your data.</li>
        </ul>
        <p>
          Uninstalling the app or clearing its data may permanently remove
          records that you have not backed up. To the extent permitted by law,
          we are not responsible for loss of locally stored data or backups.
        </p>
      </>
    ),
  },
  {
    id: 'third-party',
    heading: 'Third-Party Services',
    body: (
      <p>
        Vrat relies on third-party services, including Google Play (distribution
        and payments), Google AdMob (advertising), and RevenueCat (purchase
        management). Your use of those services is also subject to their own
        terms and policies, and we are not responsible for their practices or
        availability. See the <Link to="/privacy">Privacy Policy</Link> for how
        they handle information.
      </p>
    ),
  },
  {
    id: 'intellectual-property',
    heading: 'Intellectual Property',
    body: (
      <p>
        The Vrat name, logo, app design, software, and original content are
        owned by the developer or used with appropriate rights, except for
        third-party and open-source components, which remain subject to their
        own licenses. You may not copy, modify, distribute, or create
        derivative works from the app's proprietary content except as permitted
        by law or with prior permission.
      </p>
    ),
  },
  {
    id: 'disclaimer',
    heading: 'Disclaimer',
    body: (
      <>
        <p>
          Vrat is provided "as is" and "as available", without warranties of
          any kind, to the fullest extent permitted by law. Vrat does not
          guarantee any particular result or outcome.
        </p>
        <p>
          Vrat is not a medical, fitness coaching, psychological, therapeutic,
          financial, or legal service, and it does not provide professional
          advice of any kind. Because Vrat includes workout tracking, you are
          responsible for deciding whether any physical activity is appropriate
          for you, and you should seek advice from a qualified professional,
          such as a physician, where appropriate — particularly before starting
          or changing an exercise routine.
        </p>
      </>
    ),
  },
  {
    id: 'availability',
    heading: 'Availability and Changes',
    body: (
      <p>
        We may update, change, suspend, or discontinue the app or any of its
        features. We may also update these Terms of Service; when we do, we will
        update the "Last updated" date at the top of this page. Your continued
        use of the app after changes take effect means you accept the updated
        terms.
      </p>
    ),
  },
  {
    id: 'termination',
    heading: 'Termination',
    body: (
      <p>
        You may stop using Vrat at any time by uninstalling it. Because Vrat has
        no account system, ending your use of the app mainly means removing it
        and its data from your device. We may limit or discontinue the app as
        described above.
      </p>
    ),
  },
  {
    id: 'liability',
    heading: 'Limitation of Liability',
    body: (
      <p>
        To the fullest extent permitted by law, the developer of Vrat will not
        be liable for any indirect, incidental, special, consequential, or
        similar damages, or for any loss of data, arising from your use of, or
        inability to use, the app. Nothing in these terms excludes or limits
        any rights that cannot be excluded or limited under applicable law.
      </p>
    ),
  },
  {
    id: 'governing-law',
    heading: 'Governing Law / Jurisdiction',
    body: (
      <p>
        These Terms of Service are governed by the laws applicable in the
        developer's place of residence, without regard to conflict-of-law
        principles, except where mandatory consumer-protection laws that apply
        to you provide otherwise.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: 'Contact',
    body: (
      <p>
        If you have questions about these Terms of Service, contact us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    ),
  },
]

export default function Terms() {
  return (
    <LegalPage
      seoTitle="Terms of Service — Vrat"
      seoDescription="The Terms of Service for Vrat — a local-first personal integrity app that is free to use with occasional ads, with an optional one-time Lifetime purchase that removes them."
      title="Terms of Service"
      lastUpdated={LEGAL_LAST_UPDATED}
      intro={
        <p>
          These terms govern your use of the Vrat app, including the free
          version and the optional one-time Lifetime purchase. Please read them
          carefully.
        </p>
      }
      sections={sections}
    />
  )
}
