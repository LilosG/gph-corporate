// Corporate-site-only content: photography and venue-page copy.
// Deliberately NOT merged into gphNetwork.ts — that file's base shape
// (name, url) must stay byte-identical across all six sibling venue repos.
//
// `descriptor` is pulled directly from each venue's own live, published
// site (meta description / og:description) — not invented brand voice.
// `address` and `phone` are sourced the same way, cross-checked against
// each venue's own site and/or Google/Yelp listing. All six are sourced;
// none of this is placeholder copy.

export interface VenuePage {
  slug: string;
  /** Must match the `name` field in gphNetwork.ts exactly. */
  name: string;
  neighborhood: string;
  address: string;
  phone?: string;
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
    address: '408 Pier View Way, Oceanside, CA 92054',
    phone: '(858) 304-7725',
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
    address: '408 Pier View Way, Oceanside, CA 92054',
    phone: '(858) 304-7725',
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
    neighborhood: 'Mission Beach, San Diego, CA',
    address: '3704 Mission Blvd, San Diego, CA 92109',
    phone: '(858) 360-1566',
    descriptor:
      "Caribbean-inspired food, rum cocktails, brunch, and happy hour in Mission Beach — built for casual meals, group hangs, and coastal San Diego nights.",
    sourced: true,
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
    neighborhood: 'Carlsbad Village, CA',
    address: '3040 Carlsbad Boulevard, Carlsbad, CA 92008',
    phone: '(858) 408-6948',
    descriptor:
      'A multi-level rooftop bar and restaurant in Carlsbad Village — BBQ, craft beer, cocktails, big screens, and North County\'s game day headquarters, one block from the beach.',
    sourced: true,
    hero: '/images/venues/park-101/hero.webp',
    heroAlt: 'Park 101 rooftop courtyard with string lights and fire pit seating',
    supporting: ['/images/venues/park-101/support-1.webp', '/images/venues/park-101/support-2.webp'],
  },
  {
    slug: 'coco-maya',
    name: 'Coco Maya',
    neighborhood: 'Little Italy, San Diego, CA',
    address: '1660 India St, San Diego, CA 92101',
    phone: '(762) 475-8756',
    descriptor:
      "Modern American coastal cuisine, craft cocktails, and San Diego's best brunch, served daily under a glass atrium in the heart of Little Italy.",
    sourced: true,
    hero: '/images/venues/coco-maya/hero.webp',
    heroAlt: 'Coco Maya glass atrium bar with teal tile and hanging plants',
    supporting: ['/images/venues/coco-maya/support-1.webp', '/images/venues/coco-maya/support-2.webp'],
  },
  {
    slug: 'louisiana-purchase',
    name: 'Louisiana Purchase',
    neighborhood: 'North Park, San Diego, CA',
    address: '2305 University Ave, San Diego, CA 92104',
    phone: '(858) 683-6828',
    descriptor:
      'New Orleans-inspired Cajun and Creole food with craft cocktails in North Park — oxtail, catfish, crawfish, and weekend brunch in a room modeled after the French Quarter.',
    sourced: true,
    hero: '/images/venues/louisiana-purchase/hero.webp',
    heroAlt: 'Louisiana Purchase dining room with wood lattice ceiling and marble bar',
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
