export type Milestone = {
  year: number | string;
  label: string;
  placeholder?: boolean;
};

// Founder/brand story content sourced from GPH's existing About page copy.
// Milestones beyond the founding year are placeholder-flagged pending
// real dates/details from Pete.
export const company = {
  founderName: 'Pete Cich',
  founded: 2015,
  hqCity: 'San Diego, CA',
  thesis: 'Grind now to prosper later.',

  whatSection: `Grind & Prosper Hospitality is a San Diego based restaurant group comprised of four original concepts and two partnerships. Founder Pete Cich has been conceptualizing this collective for many years, however it was officially crafted in 2015. He has always had a vision for far more than the traditional hospitality career path and aimed to create something he could call his own. With Pete's larger than life personality and a team whose drive just won't quit, GPH is currently undergoing rapid expansion.`,

  whoAndWhySection: `GPH is comprised of a group of industry veterans. Friends who have become family over the many years of working late nights and early mornings together in the San Diego hospitality industry. We do not shy away from hard work, long hours, or tough days. But if there is one adage that anyone would say we live by, it's "work hard, play hard." For every difficult day there is an equal and opposite day that makes it all worth it.`,

  philosophySection: `We believe in creating an experience, not just a medium for pushing out great food and drink. Setting the mood and creating a fun atmosphere is paramount. We are big on vibes. Without them, we have nothing. As with any good business, we look for holes in the market when creating each of our ventures. We strongly believe in forming relationships, whether it be with our guests, with our staff, or with our industry peers.`,

  milestones: [
    { year: 2015, label: 'GPH officially founded by Pete Cich' },
    { year: 'TBD', label: 'Placeholder — additional milestones needed from Pete', placeholder: true },
  ] satisfies Milestone[],

  stats: {
    venuesCount: 6,
    yearsOperating: new Date().getFullYear() - 2015,
    neighborhoodsServed: 'TBD',
  },
};
