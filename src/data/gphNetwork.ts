export type GphVenue = {
  name: string;
  url: string;
  neighborhood?: string;
  tagline?: string;
  signatureItem?: string;
  placeholder?: boolean;
};

// Single source of truth for cross-site footer links across the
// Grind & Prosper Hospitality portfolio. Base shape (name, url) must
// stay identical to the copy in every venue repo. Extended fields
// below (neighborhood, tagline, signatureItem) are specific to the
// corporate site's Concepts hub and are placeholder-flagged until
// real marketing copy is provided by GPH.
export const GPH_NETWORK: GphVenue[] = [
  { name: 'The Lobby Tiki Bar',     url: 'https://lobbytikibar.com',        placeholder: true },
  { name: 'Coco Cabana',            url: 'https://cococabanaoside.com',     placeholder: true },
  { name: "Miss B's Coconut Club",  url: 'https://missbcoconutclub.com',    placeholder: true },
  { name: 'Park 101',               url: 'https://park101carlsbad.com',     placeholder: true },
  { name: 'Coco Maya',              url: 'https://inlovewiththecoco.com',   placeholder: true },
  { name: 'Louisiana Purchase',     url: 'https://louisianapurchasesd.com', placeholder: true },
];

export const GRIND_AND_PROSPER_URL = 'https://grindprosper.com';
