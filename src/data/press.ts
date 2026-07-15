export type PressMention = {
  outlet: string;
  title: string;
  url: string;
  dateLabel: string;
  placeholder: boolean;
};

export type Award = {
  title: string;
  year: string;
  issuer: string;
  placeholder: boolean;
};

// No press mentions or awards have been provided by GPH yet, and
// the current site has no equivalent page to source from — this is
// a net-new section. Structure is final; content is placeholder only.
export const pressMentions: PressMention[] = [
  { outlet: 'Placeholder', title: 'Press mention pending', url: '', dateLabel: 'TBD', placeholder: true },
];

export const awards: Award[] = [
  { title: 'Placeholder — award/recognition pending', year: 'TBD', issuer: 'TBD', placeholder: true },
];
