import { PLAY_STORE_URL } from '../siteConfig'

type PlayLinkProps = {
  className?: string
  /** Visible label; defaults to the full CTA. */
  label?: string
  onClick?: () => void
}

/** The Google Play call to action, shared by every page. */
export default function PlayLink({
  className = 'btn btn--primary',
  label = 'Get Vrat on Google Play',
  onClick,
}: PlayLinkProps) {
  const full = 'Get Vrat on Google Play'
  return (
    <a
      href={PLAY_STORE_URL}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label === full ? undefined : full}
      onClick={onClick}
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
      {label}
    </a>
  )
}
