// Corporate-site-only content: photography and venue-page copy.
// Deliberately NOT merged into gphNetwork.ts — that file's base shape
// (name, url) must stay byte-identical across all six sibling venue repos.
//
// `descriptor` is sourced from each venue's own live, published site copy
// (meta description / hero copy) wherever that site was reachable and
// confirmed — not invented brand voice. Venues marked `sourced: false`
// are holding a neutral, factual placeholder line pending real copy from
// GPH; do not treat that line as final marketing copy.

export interface VenuePage {
  slug: string;
  /** Must match the `name` field in gphNetwork.ts exactly. */
  name: string;
  neighborhood: string;
  descriptor: string;
  sourced: boolean;
  hero: string;
  heroAlt: string;
  supporting: string[];
}

export const VENUE_PAGES: VenuePage[] = [
  {
    slug: 'the-lobby-tiki-bar',
    name: 'The Lobby Tiki Bar',
    neighborhood: 'Oceanside, CA',
    descriptor:
      "Craft tiki cocktails, island-inspired food, and Oceanside's best happy hour, inside The Brick Hotel on Pier View Way.",
    sourced: true,
    hero: '/images/venues/lobby-tiki-bar/hero.webp',
    heroAlt: 'The Lobby Tiki Bar interior with tiki decor and craft cocktails in Oceanside, CA',
    supporting: ['/images/venues/lobby-tiki-bar/support-1.webp'],
  },
  {
    slug: 'coco-cabana',
    name: 'Coco Cabana',
    neighborhood: 'Oceanside, CA',
    descriptor:
      'An Oceanside rooftop bar four stories above Downtown Oceanside, built around coastal-inspired cocktails, weekend brunch, and skyline views out to the Pacific.',
    sourced: true,
    hero: '/images/venues/cococabana/hero.webp',
    heroAlt: 'Cococabana rooftop bar seating with Oceanside skyline views',
    supporting: [
      '/images/venues/cococabana/support-1.webp',
      '/images/venues/cococabana/support-2.webp',
      '/images/venues/cococabana/support-3.webp',
    ],
  },
  {
    slug: 'miss-bs-coconut-club',
    name: "Miss B's Coconut Club",
    neighborhood: 'San Diego, CA',
    descriptor: 'Placeholder line pending real copy from GPH — do not treat as final.',
    sourced: false,
    hero: '/images/venues/miss-bs-coconut-club/hero.webp',
    heroAlt: "Miss B's Coconut Club venue interior",
    supporting: [
      '/images/venues/miss-bs-coconut-club/support-1.webp',
      '/images/venues/miss-bs-coconut-club/support-2.webp',
      '/images/venues/miss-bs-coconut-club/support-3.webp',
    ],
  },
  {
    slug: 'park-101',
    name: 'Park 101',
    neighborhood: 'Carlsbad, CA',
    descriptor: 'Placeholder line pending real copy from GPH — do not treat as final.',
    sourced: false,
    hero: '/images/venues/park-101/hero.webp',
    heroAlt: 'Park 101 venue interior',
    supporting: ['/images/venues/park-101/support-1.webp', '/images/venues/park-101/support-2.webp'],
  },
  {
    slug: 'coco-maya',
    name: 'Coco Maya',
    neighborhood: 'San Diego, CA',
    descriptor: 'Placeholder line pending real copy from GPH — do not treat as final.',
    sourced: false,
    hero: '/images/venues/coco-maya/hero.webp',
    heroAlt: 'Coco Maya venue interior',
    supporting: ['/images/venues/coco-maya/support-1.webp', '/images/venues/coco-maya/support-2.webp'],
  },
  {
    slug: 'louisiana-purchase',
    name: 'Louisiana Purchase',
    neighborhood: 'San Diego, CA',
    descriptor: 'Placeholder line pending real copy from GPH — do not treat as final.',
    sourced: false,
    hero: '/images/venues/louisiana-purchase/hero.webp',
    heroAlt: 'Louisiana Purchase brunch spread and dining room',
    supporting: [
      '/images/venues/louisiana-purchase/support-1.webp',
      '/images/venues/louisiana-purchase/support-2.webp',
      '/images/venues/louisiana-purchase/support-3.webp',
    ],
  },
];

export function getVenuePage(slug: string): VenuePage | undefined {
  return VENUE_PAGES.find((v) => v.slug === slug);
}

// Non-venue-attributed atmosphere shots for interstitial bands (home page
// editorial sections, culture section, CTA bands) — pulled from venues
// with surplus photography so no single image is reused across sections.
export const INTERLUDE_IMAGES: string[] = [
  '/images/venues/_interludes/interlude-1.webp',
  '/images/venues/_interludes/interlude-2.webp',
  '/images/venues/_interludes/interlude-3.webp',
  '/images/venues/_interludes/interlude-4.webp',
  '/images/venues/_interludes/interlude-5.webp',
  '/images/venues/_interludes/interlude-6.webp',
  '/images/venues/_interludes/interlude-7.webp',
  '/images/venues/_interludes/interlude-8.webp',
  '/images/venues/_interludes/interlude-9.webp',
];
