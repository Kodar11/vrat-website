import { Link } from 'react-router-dom'
import LegalPage, { type LegalSection } from '../components/LegalPage'

const CONTACT_EMAIL = 'tanmaychavan13@gmail.com'

const sections: LegalSection[] = [
  {
    id: 'acceptance',
    heading: 'Acceptance of Terms',
    body: (
      <p>
        By downloading, installing, or using the Vrat app ("Vrat" or the
        "app"), you agree to these Terms of Service. If you do not agree with
        these terms, please do not use the app.
      </p>
    ),
  },
  {
    id: 'description',
    heading: 'Description of Vrat',
    body: (
      <p>
        Vrat is a personal integrity application that helps you make and keep
        promises to yourself, build habits, track workouts, and review your
        progress. Vrat is designed as a local-first personal tool: the current
        version has no user accounts and no cloud synchronization, and your data
        is stored on your device.
      </p>
    ),
  },
  {
    id: 'use-of-app',
    heading: 'Use of the App',
    body: (
      <>
        <p>
          You may use Vrat for your own personal, lawful purposes. You agree not
          to misuse the app, including by attempting to interfere with its
          intended operation or using it in a way that violates applicable laws.
        </p>
        <p>
          Vrat is provided as a personal tool for reflection and
          self-accountability. It does not provide professional advice of any
          kind (see the Disclaimer below).
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
          <li>The information and content you enter into the app.</li>
          <li>Keeping your device secure.</li>
          <li>
            Safeguarding any backup PIN you create and keeping copies of any
            backups that are important to you.
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
    id: 'privacy',
    heading: 'Personal Data and Privacy',
    body: (
      <p>
        Vrat is designed to keep your data on your device. How information is
        handled is described in the{' '}
        <Link to="/privacy">Privacy Policy</Link>, which forms part of your
        understanding of how the app works. Please review it to understand how
        your information is stored and handled.
      </p>
    ),
  },
  {
    id: 'backups',
    heading: 'Backups and Data Loss',
    body: (
      <>
        <p>
          Vrat may allow you to create encrypted backups of your app data,
          protected by a PIN that you choose. Please note:
        </p>
        <ul>
          <li>You are responsible for keeping your backup PIN safe.</li>
          <li>
            Vrat cannot recover an encrypted backup if the required PIN is lost.
          </li>
          <li>
            You are responsible for maintaining your own copies of any important
            backups.
          </li>
          <li>Vrat does not currently provide cloud recovery of your data.</li>
        </ul>
        <p>
          You are responsible for maintaining backups of any information that is
          important to you. To the extent permitted by law, we are not
          responsible for any loss of locally stored data or backups.
        </p>
      </>
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
        respective licenses. You may not copy, modify, distribute, or create
        derivative works from the app's proprietary content except as permitted
        by law or with prior permission.
      </p>
    ),
  },
  {
    id: 'third-party',
    heading: 'Third-Party Platforms and Services',
    body: (
      <p>
        Vrat is distributed through third-party platforms such as app stores,
        and your use of those platforms is subject to their own terms and
        policies. Vrat is not responsible for the practices of third-party
        platforms or services that are outside of its control.
      </p>
    ),
  },
  {
    id: 'disclaimer',
    heading: 'Disclaimer',
    body: (
      <>
        <p>
          Vrat is provided on an "as is" and "as available" basis, without
          warranties of any kind, whether express or implied, to the fullest
          extent permitted by applicable law. Vrat does not guarantee any
          particular result or outcome.
        </p>
        <p>
          Vrat is not a medical, fitness, psychological, financial, legal, or
          therapeutic service, and it does not provide professional advice of
          any kind. Because Vrat includes workout tracking, you are responsible
          for deciding whether any physical activity is appropriate for you, and
          you should seek advice from a qualified professional, such as a
          physician, where appropriate — particularly before beginning or
          changing an exercise routine.
        </p>
      </>
    ),
  },
  {
    id: 'liability',
    heading: 'Limitation of Liability',
    body: (
      <p>
        To the fullest extent permitted by applicable law, the developer of Vrat
        will not be liable for any indirect, incidental, special, consequential,
        or similar damages, or for any loss of data, arising out of or relating
        to your use of, or inability to use, the app. Nothing in these terms is
        intended to exclude or limit any rights that cannot be excluded or
        limited under applicable law.
      </p>
    ),
  },
  {
    id: 'availability',
    heading: 'Availability and Changes',
    body: (
      <p>
        We may update, change, suspend, or discontinue the app or any of its
        features at any time. We may also update these Terms of Service from
        time to time; when we do, we will update the "Last updated" date shown
        at the top of this page. Your continued use of the app after changes
        take effect indicates your acceptance of the updated terms.
      </p>
    ),
  },
  {
    id: 'termination',
    heading: 'Termination',
    body: (
      <p>
        You may stop using Vrat at any time by uninstalling the app. We may also
        limit or discontinue availability of the app as described above. Since
        Vrat is local-first with no account system, ending your use of the app
        primarily means removing it and its data from your device.
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
        principles, except where mandatory local consumer-protection laws
        applicable to you provide otherwise. Any disputes will be handled in a
        manner consistent with those applicable laws.
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
      seoDescription="The Terms of Service for the Vrat app — an independently developed, local-first personal integrity tool."
      title="Terms of Service"
      lastUpdated="September 15, 2026"
      intro={
        <p>
          These Terms of Service govern your use of the Vrat app. Vrat is an
          independently developed, local-first personal tool. Please read these
          terms carefully.
        </p>
      }
      sections={sections}
    />
  )
}
