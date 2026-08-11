import { sb1, sb2, wlv1 } from '../../assets/images'
import { cc1, cc2, wlv2 } from '../../assets/videos'

export type WorkId = 'dowjones' | 'sportsengine' | 'sparkbird' | 'wlv' | 'cluecross'

export type WorkImage = {
  type: 'image'
  src: string
  alt: string
}

export type WorkVideo = {
  type: 'video'
  src: string
  alt?: string
}

export type WorkMedia = WorkImage | WorkVideo

export type WorkButton = {
  label: string
  href?: string
  to?: string
  target?: React.HTMLAttributeAnchorTarget
  rel?: string
}

export type WorkContent = {
  title: string
  description?: string[]
  media?: WorkMedia[]
  buttons?: WorkButton[]
}

export const workContent: Record<WorkId, WorkContent> = {
  dowjones: {
    title: 'Dow Jones',
    description: [
      "I built and maintained digital experiences across Dow Jones, with the majority of my work focused on MarketWatch and additional contributions to Barron's. Working on products used by millions of readers meant every detail mattered from performance and accessibility to responsive layouts and polished user interactions.",
      "I joined MarketWatch as a lead designer, guiding new features from early concepts and wireframes through high-fidelity mockups and interactive frontend prototypes. As my role evolved, I transitioned into frontend implementation, collaborating closely with designers, product managers, and engineers to translate concepts from Figma into polished, production-ready interfaces.",
      "Along the way, I contributed to shared React component libraries, improved accessibility across the platform, and helped evolve the user experience through thoughtful implementation, careful attention to detail, and continual refinement."
    ],
    media: [],
    buttons: [
      { label: 'Visit MarketWatch', href: 'https://www.marketwatch.com', target: '_blank', rel: 'noopener noreferrer' },
    ],
  },
  sportsengine: {
    title: 'SportsEngine',
    description: [
      "SportsEngine is where I developed the foundation of my career as a designer and frontend developer. Working across a wide variety of client projects, I designed and built responsive websites that balanced visual design, usability, and performance while translating wireframes and mockups into polished, production-ready experiences.",
      "Beyond implementation, I collaborated with clients throughout the project lifecycle, contributing to discovery, project scoping, and design discussions. The variety of projects challenged me to adapt quickly, maintain strong attention to detail, and build interfaces that met both business goals and user needs."
    ],
    media: [],
    buttons: [
      { label: 'Visit SportsEngine', href: 'https://www.sportsengine.com', target: '_blank', rel: 'noopener noreferrer' },
    ],
  },
  sparkbird: {
    title: 'Sparkbird',
    description: [
      "As the initial product designer for Sparkbird, I established the visual direction and user experience for a birdwatching community app. Working closely with the founder, I translated early product ideas into intuitive interfaces that laid the foundation for the application's design system and user experience.",
      "Sparkbird has since evolved into a thriving community platform for bird enthusiasts featuring AI-powered bird identification, sighting tracking, and social features."
    ],
    media: [
      { type: 'image', src: sb1, alt: 'SparkBird app camera screen' },
      { type: 'image', src: sb2, alt: 'SparkBird app feed and capture screen' },
    ],
    buttons: [
      { label: 'SparkBird App', href: 'https://apps.apple.com/us/app/sparkbird/id1440685638', target: '_blank', rel: 'noopener noreferrer' },
    ],
  },
  wlv: {
    title: 'Wooden Link Vineyard',
    description: [
      "I designed the visual identity for Wooden Link Vineyard's wine labels, merchandise, and promotional materials, helping establish a cohesive brand presence across packaging and marketing. The work focused on creating a premium yet approachable identity that reflected the vineyard's commitment to crafting refined Minnesota wines."
    ],
    media: [
      { type: 'image', src: wlv1, alt: 'Wooden Link Vineyard wine label design' },
      { type: 'video', src: wlv2, alt: 'Wooden Link Vineyard design video' },
    ],
    buttons: [
      { label: 'Visit Wooden Link Vineyard', href: 'https://woodenlinkvineyard.com/', target: '_blank', rel: 'noopener noreferrer' },
    ],
  },
  cluecross: {
    title: 'ClueCross',
    description: [
      "My infatuation with puzzles and word games led to a passion project that introduces a new format to freeform crossword puzzles. ClueCross is a daily word puzzle web application built with React, TypeScript, and Vite.",
      "I designed the gameplay, architecture, UI, and interaction patterns, then used Claude Code as a development assistant to accelerate implementation, debugging, and refactoring. Every feature was planned, reviewed, and iterated through testing before being incorporated into the application."
    ],
    media: [
      { type: 'video', src: cc1, alt: 'ClueCross gameplay demo' },
      { type: 'video', src: cc2, alt: 'ClueCross design system demo' },
    ],
    buttons: [
      { label: 'Try ClueCross Prototype', href: 'https://clue-cross.vercel.app/', target: '_blank', rel: 'noopener noreferrer' },
    ],
  },
}
