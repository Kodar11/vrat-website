import LegalPage, { type LegalSection } from '../components/LegalPage'
import { CONTACT_EMAIL, LEGAL_LAST_UPDATED } from '../siteConfig'

const sections: LegalSection[] = [
  {
    id: 'introduction',
    heading: 'Introduction',
    body: (
      <>
        <p>
          This Privacy Policy explains how information is handled when you use
          the Vrat Android app ("Vrat" or the "app"). Vrat is developed and
          maintained by an individual developer ("we", "us").
        </p>
        <p>
          The short version: your Vrat records — promises, habits, workouts,
          and history — are stored on your device, not on servers operated by
          Vrat. Vrat does not require an account. Vrat does use third-party
          services to show ads to free users and to process the optional
          Lifetime purchase, and those services process limited technical and
          transaction information. This policy explains that distinction.
        </p>
      </>
    ),
  },
  {
    id: 'what-vrat-does',
    heading: 'What Vrat Does',
    body: (
      <p>
        Vrat is a personal integrity app. It helps you make promises to
        yourself, build habits, track workouts, and review your consistency
        over time. Vrat is free to use with occasional ads. An optional
        one-time Lifetime purchase removes Vrat's ads.
      </p>
    ),
  },
  {
    id: 'information-you-enter',
    heading: 'Information You Enter and Store Locally',
    body: (
      <>
        <p>
          As you use Vrat, you may create information such as:
        </p>
        <ul>
          <li>Promises you make</li>
          <li>Habits you track</li>
          <li>Workout records</li>
          <li>Progress and history</li>
          <li>Preferences and settings</li>
          <li>Backup-related information</li>
        </ul>
        <p>
          We refer to this as your <strong>Vrat records</strong>. Your Vrat
          records are stored on your device and are used only to provide the
          app's features to you. Vrat does not send your Vrat records to
          servers operated by Vrat, and does not provide them to the
          advertising or purchase services described below.
        </p>
        <p>
          If you choose to share something from the app — for example a share
          card image, an exported report, or a backup file — it goes wherever
          you send it using your device's share options. What happens to it
          after that depends on the destination you chose.
        </p>
      </>
    ),
  },
  {
    id: 'information-on-device',
    heading: 'Information Stored on Your Device',
    body: (
      <>
        <p>
          Vrat keeps your records in a local database on your device so the app
          can work and your history stays available to you. This database is
          encrypted, which is designed to help protect your records if someone
          gains access to the app's stored files.
        </p>
        <p>
          Vrat also stores a small amount of app state locally, such as your
          settings and whether the Lifetime purchase is active on this device.
        </p>
      </>
    ),
  },
  {
    id: 'backups',
    heading: 'Backups',
    body: (
      <>
        <p>You can create a backup of your Vrat records at any time.</p>
        <ul>
          <li>Backup files are encrypted.</li>
          <li>Each backup is protected by a PIN that you choose.</li>
          <li>
            You decide where the backup file is saved or sent, using your
            device's share and file options.
          </li>
          <li>
            Vrat does not provide Vrat-hosted cloud backup, and does not upload
            your backup files to Vrat-operated servers.
          </li>
          <li>
            If you lose your PIN, the encrypted backup may be impossible to
            open. We cannot recover it for you.
          </li>
          <li>
            You are responsible for keeping important backups, and their PINs,
            safe.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'information-processed-by-vrat',
    heading: 'Information Processed by Vrat',
    body: (
      <>
        <p>
          We (the developer) do not operate servers that receive your Vrat
          records, and we do not have an account system. That means we do not
          have access to your promises, habits, workouts, or history.
        </p>
        <p>
          We may receive information that is made available to app developers
          by the third-party services described below — for example, aggregated
          advertising reports from Google AdMob, purchase records through
          RevenueCat and Google Play, and app statistics provided by Google
          Play. We also receive whatever you choose to send us when you contact
          us by email.
        </p>
      </>
    ),
  },
  {
    id: 'third-party-services',
    heading: 'Third-Party Services',
    body: (
      <>
        <p>Vrat uses the following third-party services:</p>
        <ul>
          <li>
            <strong>Google AdMob</strong> — to show ads to free users and to
            measure ad delivery.
          </li>
          <li>
            <strong>RevenueCat</strong> — to manage the Lifetime purchase and
            check whether it is active.
          </li>
          <li>
            <strong>Google Play</strong> — to distribute Vrat and process
            in-app purchases.
          </li>
        </ul>
        <p>
          These services do not receive your Vrat records. They may process
          technical, advertising, or transaction information needed to perform
          their functions, as described in the following sections. Each
          service handles information under its own privacy policy.
        </p>
      </>
    ),
  },
  {
    id: 'advertising',
    heading: 'Advertising and Google AdMob',
    body: (
      <>
        <p>
          If you use the free version of Vrat, you may see ads. Ads are
          provided by Google AdMob. Vrat intends to keep ads limited — at most
          roughly one full-screen ad per day, shown after the app has opened —
          and does not intentionally place ads over important moments such as
          completing a promise or finishing a workout. If you have purchased
          Lifetime, you will not see Vrat ads.
        </p>
        <p>
          To serve and measure ads, and to help prevent ad fraud, Google's
          Mobile Ads SDK automatically collects certain information from your
          device. According to Google's documentation, this can include:
        </p>
        <ul>
          <li>
            Your device's IP address, which may be used to estimate its general
            location.
          </li>
          <li>
            Device identifiers, such as the Android advertising ID and app set
            ID.
          </li>
          <li>
            Interactions with ads and the app, such as app launches, taps, and
            video views.
          </li>
          <li>
            Diagnostic and performance information, such as app launch time and
            SDK performance.
          </li>
        </ul>
        <p>
          This information is sent to Google, is encrypted in transit, and is
          handled under Google's policies. Google may use it for advertising,
          analytics, and fraud prevention. Google's partners and ad networks
          may also be involved in serving ads. Learn more in{' '}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            How Google uses information from apps that use its services
          </a>{' '}
          and the{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Privacy Policy
          </a>
          .
        </p>
        <h3>Your advertising choices</h3>
        <p>
          Depending on your region and applicable requirements, you may be
          asked for your consent before ads are personalized. Where the app
          offers a privacy options entry point, you can revisit those choices
          there. On Android, you can also reset or delete your advertising ID,
          and manage ad personalization, in your device's settings (usually
          under Settings → Privacy → Ads, or Settings → Google → Ads).
        </p>
      </>
    ),
  },
  {
    id: 'revenuecat',
    heading: 'Purchases and RevenueCat',
    body: (
      <>
        <p>
          Vrat uses RevenueCat to manage the optional Lifetime purchase and to
          check whether it is active on your device.
        </p>
        <ul>
          <li>
            Vrat does not require a Vrat account. RevenueCat assigns an
            anonymous, randomly generated identifier to the app installation;
            Vrat does not send your name, email address, or other contact
            details to RevenueCat.
          </li>
          <li>
            RevenueCat processes purchase-related information, such as purchase
            history and the Google Play purchase details needed to validate a
            purchase, along with basic technical information needed to operate
            its service.
          </li>
          <li>
            RevenueCat is not used to store your promises, habits, workouts, or
            other Vrat records.
          </li>
        </ul>
        <p>
          See the{' '}
          <a
            href="https://www.revenuecat.com/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            RevenueCat Privacy Policy
          </a>{' '}
          for details.
        </p>
      </>
    ),
  },
  {
    id: 'google-play-billing',
    heading: 'Google Play Billing',
    body: (
      <>
        <ul>
          <li>The Lifetime purchase is processed by Google Play.</li>
          <li>
            Your payment details are handled by Google Play. Vrat never sees or
            stores your card or other payment credentials.
          </li>
          <li>
            Vrat receives only the information needed to determine whether
            Lifetime has been purchased.
          </li>
          <li>
            If you reinstall Vrat or change devices, you may be able to restore
            your purchase through the app, using the Google Play account you
            bought it with.
          </li>
        </ul>
        <p>
          Google Play's handling of your information is described in the{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Privacy Policy
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'permissions',
    heading: 'Permissions',
    body: (
      <>
        <p>
          Vrat requests permissions only where needed for a feature. These may
          include:
        </p>
        <ul>
          <li>
            <strong>Internet access</strong> — used for ads and purchase
            processing.
          </li>
          <li>
            <strong>Notifications</strong> — for reminders you set up. Vrat's
            reminders are scheduled on your device.
          </li>
          <li>
            <strong>Photos / media storage</strong> — to save share card images
            to your photo library when you ask it to.
          </li>
          <li>
            <strong>Advertising ID</strong> — used by the Google Mobile Ads SDK,
            as described above.
          </li>
        </ul>
        <p>
          You can review and change app permissions at any time in your
          device's settings.
        </p>
      </>
    ),
  },
  {
    id: 'internet',
    heading: 'Internet Connectivity',
    body: (
      <>
        <p>
          The app is designed so that core personal records do not require a
          Vrat cloud account. Your Vrat records are read from and written to
          your device.
        </p>
        <p>However, network access is used for:</p>
        <ul>
          <li>Loading and displaying ads (free version).</li>
          <li>Purchasing, validating, and restoring the Lifetime purchase.</li>
          <li>The operation of the third-party services described above.</li>
        </ul>
        <p>
          Some of these functions will not work without a connection.
        </p>
      </>
    ),
  },
  {
    id: 'how-information-is-used',
    heading: 'How Information Is Used',
    body: (
      <ul>
        <li>
          <strong>Your Vrat records</strong> are used on your device to provide
          the app's features.
        </li>
        <li>
          <strong>Advertising information</strong> is used by Google AdMob to
          serve and measure ads and to help prevent fraud.
        </li>
        <li>
          <strong>Purchase information</strong> is used by Google Play and
          RevenueCat to process, validate, and restore the Lifetime purchase.
        </li>
        <li>
          <strong>Emails you send us</strong> are used to respond to you.
        </li>
      </ul>
    ),
  },
  {
    id: 'data-sharing',
    heading: 'Data Sharing',
    body: (
      <>
        <p>
          We do not sell your Vrat personal records, and we do not share them
          with advertisers or other third parties.
        </p>
        <p>
          The third-party services built into the app receive the information
          they need to do their jobs, as described above:
        </p>
        <ul>
          <li>Advertising (Google AdMob).</li>
          <li>Fraud prevention (Google AdMob).</li>
          <li>Purchase processing (Google Play).</li>
          <li>Entitlement validation (RevenueCat).</li>
          <li>Technical operation of those services.</li>
        </ul>
        <p>
          We may also disclose information if required by law, though we
          generally do not hold your Vrat records to disclose.
        </p>
      </>
    ),
  },
  {
    id: 'data-security',
    heading: 'Data Security',
    body: (
      <>
        <p>
          Vrat uses measures designed to help protect your information,
          including an encrypted local database and PIN-protected, encrypted
          backup files. The third-party services described above encrypt the
          information they transmit.
        </p>
        <p>
          No method of storage or transmission is completely secure, and we
          cannot guarantee absolute security. You play an important part too —
          for example, by using a screen lock on your device and keeping your
          backup PIN private.
        </p>
      </>
    ),
  },
  {
    id: 'data-retention',
    heading: 'Data Retention',
    body: (
      <ul>
        <li>
          <strong>Vrat records on your device</strong> remain until you delete
          them, clear the app's data, or uninstall the app.
        </li>
        <li>
          <strong>Backup files</strong> remain wherever you saved them until
          you delete them.
        </li>
        <li>
          <strong>Information processed by third-party services</strong> is
          retained by those providers according to their own policies and
          applicable legal requirements.
        </li>
      </ul>
    ),
  },
  {
    id: 'data-deletion',
    heading: 'Data Deletion',
    body: (
      <>
        <p>You control deletion of your Vrat records:</p>
        <ul>
          <li>Delete individual entries within the app.</li>
          <li>
            Clear the app's storage in your device settings, which removes all
            local Vrat records.
          </li>
          <li>Uninstall the app, which also removes its local data.</li>
          <li>
            Delete any backup files from wherever you stored them — Vrat cannot
            do this for you.
          </li>
        </ul>
        <p>
          Removing local data does not remove information held by third-party
          services. You can reset or delete your Android advertising ID in your
          device settings, and you can contact us about purchase-related
          information held by RevenueCat — we will help where the service
          allows it. Purchase records held by Google Play are subject to
          Google's policies.
        </p>
      </>
    ),
  },
  {
    id: 'childrens-privacy',
    heading: "Children's Privacy",
    body: (
      <p>
        Vrat is not directed to children under 13, and we do not knowingly
        collect personal information from children. Because the free version
        shows ads, Vrat is not intended for young children. If you believe a
        child has used Vrat in a way that raises a concern, please contact us.
      </p>
    ),
  },
  {
    id: 'your-choices',
    heading: 'Your Choices and Controls',
    body: (
      <ul>
        <li>Use Vrat without creating an account.</li>
        <li>Create, keep, or delete encrypted backups whenever you choose.</li>
        <li>Delete your local records at any time (see Data Deletion).</li>
        <li>
          Manage ad personalization and your advertising ID in your device
          settings, and any consent choices offered in the app.
        </li>
        <li>Remove Vrat's ads with the one-time Lifetime purchase.</li>
        <li>Manage app permissions in your device settings.</li>
      </ul>
    ),
  },
  {
    id: 'changes',
    heading: 'Changes to This Privacy Policy',
    body: (
      <p>
        We may update this Privacy Policy when the app changes or to reflect
        legal requirements. When we do, we will update the "Last updated" date
        at the top of this page. Please review it from time to time.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: 'Contact',
    body: (
      <p>
        For questions about this Privacy Policy or how your information is
        handled, contact us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    ),
  },
]

export default function Privacy() {
  return (
    <LegalPage
      seoTitle="Privacy Policy — Vrat"
      seoDescription="How Vrat handles your information: records stored locally in an encrypted database, no Vrat account, and the third-party services used for ads (Google AdMob) and purchases (RevenueCat, Google Play)."
      title="Privacy Policy"
      lastUpdated={LEGAL_LAST_UPDATED}
      intro={
        <p>
          Vrat is local-first: your records stay on your device, and there is
          no Vrat account. This policy explains that, and the limited
          information processed by the services Vrat uses for ads and
          purchases.
        </p>
      }
      sections={sections}
    />
  )
}
