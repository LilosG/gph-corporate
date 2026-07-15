export type OpenRole = {
  title: string;
  venue: string;
  locationLabel: string;
  applyUrl: string;
  placeholder: boolean;
};

// No open roles or careers content has been provided by GPH yet, and
// the current site has no careers page to source from — this is a
// net-new section. Structure is final; content is placeholder only.
// If GPH decides to keep careers evergreen/general rather than listing
// specific roles, this array can render empty and the page should
// fall back to a general "we're always growing, reach out" state
// rather than showing fabricated openings.
export const openRoles: OpenRole[] = [
  { title: 'Placeholder — role TBD', venue: 'TBD', locationLabel: 'San Diego, CA', applyUrl: '', placeholder: true },
];
