import LegalPage, { type LegalSection } from '../components/LegalPage'

const CONTACT_EMAIL = 'tanmaychavan13@gmail.com'

const sections: LegalSection[] = [
  {
    id: 'introduction',
    heading: 'Introduction',
    body: (
      <>
        <p>
          Vrat is a personal integrity application that helps you make and keep
          promises to yourself, build habits, and track workouts. This Privacy
          Policy explains how information is handled when you use the current
          version of the Vrat mobile app.
        </p>
        <p>
          Vrat is designed to be a local-first, private application. It does not
          require an account, and it is built so that your personal records stay
          on your own device.
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    heading: 'Information We Collect',
    body: (
      <>
        <p>
          The current version of Vrat does not collect your personal information
          by transmitting it to servers operated by Vrat. There is no account
          system and no sign-in.
        </p>
        <p>
          As you use the app, you may enter information that is stored locally on
          your device, such as:
        </p>
        <ul>
          <li>Promises you create</li>
          <li>Habits you track</li>
          <li>Workout records</li>
          <li>Progress and history</li>
          <li>Preferences and settings</li>
          <li>Backup-related information</li>
        </ul>
        <p>
          This information is primarily stored locally on your device and is
          used only to provide the app's features to you.
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
          Vrat stores the data you create directly on your device so that the
          app can function and so your records remain available to you.
        </p>
        <p>
          The current version of Vrat stores this data in an encrypted local
          database on the device. This is intended to help protect your
          on-device data from casual access.
        </p>
      </>
    ),
  },
  {
    id: 'backups',
    heading: 'Backups',
    body: (
      <>
        <p>
          Vrat may allow you to create backups of your app data so you can keep a
          copy of your records.
        </p>
        <ul>
          <li>Backups are protected using encryption.</li>
          <li>Each backup is protected using a PIN that you choose.</li>
          <li>You are responsible for remembering your PIN.</li>
          <li>
            If you lose your PIN, you may be unable to access the encrypted
            backup.
          </li>
        </ul>
        <p>
          Vrat does not upload your backup to Vrat-operated servers and does not
          provide cloud storage of your backups in the current version. Where a
          backup file is created, it is handled on your device and through the
          storage locations you choose.
        </p>
      </>
    ),
  },
  {
    id: 'data-sharing',
    heading: 'Data Sharing',
    body: (
      <>
        <p>
          We do not sell, rent, or share your personal information with third
          parties in the current version of Vrat.
        </p>
        <p>
          The current version of Vrat does not intentionally transmit your Vrat
          records to servers operated by Vrat.
        </p>
      </>
    ),
  },
  {
    id: 'third-party-services',
    heading: 'Third-Party Services',
    body: (
      <p>
        The current version of Vrat does not intentionally use third-party
        services to collect or sell your personal app data. Vrat does not
        include advertising SDKs, analytics services, or third-party trackers in
        this version.
      </p>
    ),
  },
  {
    id: 'permissions',
    heading: 'Permissions',
    body: (
      <>
        <p>
          Vrat may request device permissions only where they are required for
          specific app functionality. For example, saving or restoring a backup
          file may involve access to a storage location that you select.
        </p>
        <p>
          Any permission the app requests is used only to provide the related
          feature, and you can manage app permissions at any time through your
          device's system settings.
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
          We use reasonable technical measures to help protect the data stored
          locally by the app. In the current version, this includes local
          database encryption and PIN-protected encryption for backups.
        </p>
        <p>
          No method of electronic storage is completely secure, and we cannot
          guarantee absolute security. You also play an important role in
          keeping your data safe — for example, by protecting your device and
          keeping your backup PIN private.
        </p>
      </>
    ),
  },
  {
    id: 'data-retention',
    heading: 'Data Retention',
    body: (
      <>
        <p>
          Because Vrat data is primarily stored locally on your device, Vrat
          does not maintain a central personal-data database for the current app
          experience.
        </p>
        <p>
          Deleting the app or clearing its local data may remove information
          stored on the device, subject to your device's operating system and to
          any backup files you have created and stored yourself.
        </p>
      </>
    ),
  },
  {
    id: 'data-deletion',
    heading: 'Data Deletion',
    body: (
      <>
        <p>
          Because Vrat is local-first and has no account system, you can remove
          your locally stored Vrat data using the mechanisms available on your
          device and within the app, such as:
        </p>
        <ul>
          <li>Deleting entries within the app.</li>
          <li>Clearing the app's data through your device settings.</li>
          <li>Uninstalling the app.</li>
        </ul>
        <p>
          Any backup files you have created and stored yourself remain under
          your control, and you can delete those files from wherever you have
          saved them.
        </p>
      </>
    ),
  },
  {
    id: 'childrens-privacy',
    heading: "Children's Privacy",
    body: (
      <p>
        Vrat is not directed specifically to children under 13, and we do not
        knowingly collect personal information from children. If you believe a
        child has provided information in a way that raises a concern, please
        contact us so we can respond appropriately.
      </p>
    ),
  },
  {
    id: 'changes',
    heading: 'Changes to This Privacy Policy',
    body: (
      <p>
        We may update this Privacy Policy from time to time, for example when
        the app's functionality changes or to reflect legal or regulatory
        requirements. When we make changes, we will update the "Last updated"
        date shown at the top of this page. We encourage you to review this page
        periodically.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: 'Contact Us',
    body: (
      <p>
        If you have questions about this Privacy Policy or how your information
        is handled, contact us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    ),
  },
]

export default function Privacy() {
  return (
    <LegalPage
      seoTitle="Privacy Policy — Vrat"
      seoDescription="How Vrat handles your information. Vrat is local-first: no accounts, no ads, no tracking, and no cloud storage of your data in the current version."
      title="Privacy Policy"
      lastUpdated="September 15, 2026"
      intro={
        <p>
          This Privacy Policy explains how information is handled when you use
          the current version of the Vrat app. Vrat is a local-first, private
          application with no accounts and no cloud sync.
        </p>
      }
      sections={sections}
    />
  )
}
