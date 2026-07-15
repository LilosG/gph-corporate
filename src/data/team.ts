export type TeamMember = {
  name: string;
  role: string;
  bio: string | null;
  photoUrl: string | null;
  bioPlaceholder: boolean;
  photoPlaceholder: boolean;
};

// Names and roles sourced directly from GPH's existing "All the Stars"
// page (grindprosper.com/allthestars) — real, not placeholder.
// Bios and photos are NOT yet provided; those fields are placeholder-
// flagged individually. Do not add Person schema per member until
// bio + photo are real — partial schema on a stub is worse than none.
// Site itself notes: "Bios & additional team members coming soon."
export const team: TeamMember[] = [
  { name: 'Pete Cich',        role: 'Managing Partner / Owner & Co-Founder',        bio: null, photoUrl: null, bioPlaceholder: true, photoPlaceholder: true },
  { name: 'Todd DiRoberto',   role: 'Owner & Co-Founder',                           bio: null, photoUrl: null, bioPlaceholder: true, photoPlaceholder: true },
  { name: 'Rob McShea',       role: 'Director of Operations, Owner & Co-Founder',   bio: null, photoUrl: null, bioPlaceholder: true, photoPlaceholder: true },
  { name: 'Natasha Ross',     role: 'Brand Marketing Director, Partner',            bio: null, photoUrl: null, bioPlaceholder: true, photoPlaceholder: true },
  { name: 'Quinnton Austin',  role: 'Executive Chef, Partner',                      bio: null, photoUrl: null, bioPlaceholder: true, photoPlaceholder: true },
  { name: 'Huy Hoang',        role: 'Creative Marketing Director, Partner',         bio: null, photoUrl: null, bioPlaceholder: true, photoPlaceholder: true },
];

// Matches the current live site's own disclosure — keep this true
// until GPH confirms bios/photos are in and additional members added.
export const moreComingSoon = true;
