# Vrat Website

The official website for **Vrat** — a personal integrity system built around one simple idea:

> **Keep the promises you make to yourself.**

Vrat helps you turn intentions into actions by making it easier to create meaningful promises, build habits, track workouts, maintain consistency, and reflect on your progress.

## About

The Vrat website provides the official product information and legal resources for the Vrat mobile application, including:

* Privacy Policy
* Terms of Service
* About Vrat
* Contact information

The website is intentionally minimal and follows the same visual identity as the Vrat app.

## Design

The website uses Vrat's application design system:

* Dark-first interface
* `#09090B` background
* Layered dark surfaces
* `#F8FAFC` primary text
* Slate secondary text
* `#22C55E` Vrat green as the primary accent
* Minimal borders and restrained UI
* Responsive layouts for mobile and desktop
* Vrat's official green `V` logo

The goal is for the website to feel like a natural extension of the mobile application rather than a separate marketing site.

## Tech Stack

* React
* TypeScript
* Vite
* React Router
* CSS

The project intentionally keeps dependencies minimal.

## Project Structure

```text
vrat-website/
├── public/
│   ├── favicon.png
│   ├── icon.png
│   ├── icons.svg
│   ├── android-icon-background.png
│   ├── android-icon-foreground.png
│   └── ...
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── ...
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Pages

| Route      | Purpose             |
| ---------- | ------------------- |
| `/`        | Vrat homepage       |
| `/privacy` | Privacy Policy      |
| `/terms`   | Terms of Service    |
| `/about`   | About Vrat          |
| `/contact` | Contact information |

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## Deployment

The website is designed to be deployed easily to **Vercel**.

After connecting the GitHub repository to Vercel, the default Vite build configuration can be used.

The Privacy Policy is available at:

```text
/privacy
```

For example:

```text
https://your-domain.com/privacy
```

This page is intended to be publicly accessible for the Vrat Google Play listing.

## Current Vrat App

The website describes the current Vrat application and should remain consistent with the actual product.

The current Vrat app is:

* Local-first
* Account-free
* Designed around personal promises, habits, workouts, consistency, and reflection
* Built with an encrypted local database
* Capable of creating encrypted PIN-protected backups

The current app does not rely on cloud accounts for its core experience.

## Contact

For questions, support, privacy requests, or feedback:

**[tanmaychavan13@gmail.com](mailto:tanmaychavan13@gmail.com)**

## License

This repository contains the official Vrat website.

Unless otherwise stated, the original website source code and original Vrat branding are not licensed for redistribution or commercial reuse.

Third-party dependencies remain subject to their respective licenses.

---

**Vrat**

*Keep the promises you make to yourself.*
