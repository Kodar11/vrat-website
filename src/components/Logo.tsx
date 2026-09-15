type LogoProps = {
  className?: string
  /** Accessible label; empty string marks the mark as decorative. */
  alt?: string
}

/**
 * The Vrat logo mark — the green "V" app icon from the existing assets
 * (public/icon.png). Not a redrawn or text-only substitute.
 */
export default function Logo({ className, alt = '' }: LogoProps) {
  return (
    <img
      src="/icon.png"
      className={className}
      width={76}
      height={76}
      alt={alt}
      aria-hidden={alt === '' ? true : undefined}
    />
  )
}
