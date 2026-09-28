/**
 * Illustrative product visuals, drawn in HTML/CSS from the Vrat app's own
 * components (PromiseCard status badges, the habit-consistency heatmap,
 * workout set rows, the bottom tab bar). They use sample entries, so every
 * one is marked decorative with a plain-language label for screen readers.
 */
import type { CSSProperties } from 'react'

type Status = 'kept' | 'pending' | 'awaiting'

const STATUS_LABEL: Record<Status, string> = {
  kept: 'Kept',
  pending: 'Pending',
  awaiting: 'Awaiting',
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12l4 4 10-10"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function PromiseChip({
  status,
  text,
  meta,
}: {
  status: Status
  text: string
  meta?: string
}) {
  return (
    <div className="ui-promise">
      <span className={`ui-badge ui-badge--${status}`}>{STATUS_LABEL[status]}</span>
      <p className="ui-promise__text">{text}</p>
      {meta && (
        <p className="ui-promise__meta">
          <ClockIcon />
          {meta}
        </p>
      )}
    </div>
  )
}

/* Deterministic, gently improving consistency pattern for the heatmap. */
function heatLevels(weeks: number): number[][] {
  let seed = 7
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }
  return Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: 7 }, () => {
      const bias = w / weeks
      const r = rand() + bias * 0.55
      if (r < 0.35) return 0
      if (r < 0.6) return 1
      if (r < 0.85) return 2
      if (r < 1.1) return 3
      return 4
    }),
  )
}

export function Heatmap({ weeks = 14, animate = false }: { weeks?: number; animate?: boolean }) {
  const levels = heatLevels(weeks)
  return (
    <div
      className={`ui-heat${animate ? ' ui-heat--animate' : ''}`}
      style={{ '--weeks': weeks } as CSSProperties}
    >
      {levels.map((week, w) =>
        week.map((lvl, d) => (
          <span
            key={`${w}-${d}`}
            className={`ui-heat__cell l${lvl}`}
            style={{ '--i': w } as CSSProperties}
          />
        )),
      )}
    </div>
  )
}

function TabIcon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const TABS = [
  { label: 'Today', d: 'M22 12h-4l-3 9L9 3l-3 9H2' },
  { label: 'Habits', d: 'M4 15l5-5 4 4 7-7' },
  { label: 'Workout', d: 'M6.5 6.5l11 11M4 9l2-2m14 8l-2 2M8 4l2 2M14 18l2 2' },
  { label: 'Stats', d: 'M5 20V10m7 10V4m7 16v-7' },
]

/** Phone-framed glimpse of Vrat, used in the hero. */
export function PhonePreview() {
  return (
    <div className="phone">
      <div className="phone__screen">
        <div className="phone__status">
          <span>9:41</span>
          <span className="phone__notch" />
          <span className="phone__signal" />
        </div>

        <div className="phone__head">
          <p className="phone__eyebrow">Today</p>
          <p className="phone__title">Your promises</p>
        </div>

        <div className="phone__stack">
          <PromiseChip status="kept" text="Walk for 30 minutes after dinner" />
          <PromiseChip
            status="pending"
            text="Read 20 pages before bed"
            meta="Verification — 10:30 PM"
          />
        </div>

        <div className="ui-card phone__heat">
          <div className="ui-card__row">
            <p className="ui-card__label">Habit consistency</p>
            <p className="ui-card__value">14 weeks</p>
          </div>
          <Heatmap weeks={14} animate />
        </div>

        <div className="phone__tabs">
          {TABS.map((t, i) => (
            <span key={t.label} className={i === 0 ? 'is-active' : undefined}>
              <TabIcon d={t.d} />
              {t.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/** Promise feature visual: a short stack of promises in different states. */
export function PromiseStack() {
  return (
    <div className="ui-stack">
      <PromiseChip status="kept" text="Stretch for 10 minutes each morning" />
      <PromiseChip
        status="awaiting"
        text="Finish the draft before Friday"
        meta="Verification — Fri, 6:00 PM"
      />
      <PromiseChip status="pending" text="No phone after 11 PM" />
    </div>
  )
}

/** Habit feature visual: a week of check-ins plus a progress bar. */
export function HabitWeek() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const done = [true, true, false, true, true, true, false]
  return (
    <div className="ui-card ui-habit">
      <div className="ui-card__row">
        <p className="ui-card__title">Morning stretch</p>
        <p className="ui-card__value">5 / 7</p>
      </div>
      <div className="ui-week">
        {days.map((d, i) => (
          <span key={i} className={`ui-week__day${done[i] ? ' is-done' : ''}`}>
            <span className="ui-week__dot">{done[i] && <CheckIcon />}</span>
            {d}
          </span>
        ))}
      </div>
      <div className="ui-progress">
        <span style={{ width: '71%' }} />
      </div>
    </div>
  )
}

/** Workout feature visual: one exercise with logged sets. */
export function WorkoutCard() {
  const sets = [
    { n: 1, w: '60 kg', r: '8', done: true },
    { n: 2, w: '60 kg', r: '8', done: true },
    { n: 3, w: '62.5 kg', r: '6', done: false },
  ]
  return (
    <div className="ui-card ui-workout">
      <div className="ui-card__row">
        <p className="ui-card__title">Squat</p>
        <p className="ui-card__value">3 sets</p>
      </div>
      <ul>
        {sets.map((s) => (
          <li key={s.n} className={s.done ? 'is-done' : undefined}>
            <span className="ui-workout__n">{s.n}</span>
            <span>{s.w}</span>
            <span className="ui-workout__x">×</span>
            <span>{s.r}</span>
            <span className="ui-workout__check">{s.done && <CheckIcon />}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
