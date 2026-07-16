// Corporate-site-only image data for the homepage concept chapters.
// Deliberately NOT merged into gphNetwork.ts — that file must stay
// byte-compatible across all six sibling venue repos.
//
// Coverage is uneven while photography is still coming in (flagged
// per venue below). Interludes pull from whichever venues have
// surplus images and are NOT venue-attributed on the page.

export interface ChapterImages {
  hero: string;
  supporting: string[];
  placeholder?: boolean;
}

export const CHAPTER_IMAGES: Record<string, ChapterImages> = {
  'The Lobby Tiki Bar': {
    hero: '/images/venues/lobby-tiki-bar/hero.webp',
    supporting: ['/images/venues/lobby-tiki-bar/support-1.webp'],
    placeholder: true, // only 2 source photos available — thinnest chapter, needs more
  },
  'Coco Cabana': {
    hero: '/images/venues/cococabana/hero.webp',
    supporting: [
      '/images/venues/cococabana/support-1.webp',
      '/images/venues/cococabana/support-2.webp',
      '/images/venues/cococabana/support-3.webp',
    ],
  },
  "Miss B's Coconut Club": {
    hero: '/images/venues/miss-bs-coconut-club/hero.webp',
    supporting: [
      '/images/venues/miss-bs-coconut-club/support-1.webp',
      '/images/venues/miss-bs-coconut-club/support-2.webp',
      '/images/venues/miss-bs-coconut-club/support-3.webp',
    ],
  },
  'Park 101': {
    hero: '/images/venues/park-101/hero.webp',
    supporting: [
      '/images/venues/park-101/support-1.webp',
      '/images/venues/park-101/support-2.webp',
    ],
  },
  'Coco Maya': {
    hero: '/images/venues/coco-maya/hero.webp',
    supporting: [
      '/images/venues/coco-maya/support-1.webp',
      '/images/venues/coco-maya/support-2.webp',
    ],
  },
  'Louisiana Purchase': {
    hero: '/images/venues/louisiana-purchase/hero.webp',
    supporting: [
      '/images/venues/louisiana-purchase/support-1.webp',
      '/images/venues/louisiana-purchase/support-2.webp',
      '/images/venues/louisiana-purchase/support-3.webp',
    ],
  },
};

// Generic, non-venue-attributed atmosphere shots used in interlude
// bands and the culture section — pulled from venues with surplus
// photography so pacing stays full even where a chapter above is thin.
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
