export interface ValueProp {
  icon: 'timeline' | 'coverage' | 'log';
  title: string;
  body: string;
}

export const valueProps: ValueProp[] = [
{
  icon: 'timeline',
  title: 'A sourced timeline',
  body: 'Every event on a case timeline cites the filing, transcript or ruling it came from.'
},
{
  icon: 'coverage',
  title: 'The full coverage list',
  body: 'Podcasts, documentaries, books and reporting on one case, in one place, dated.'
},
{
  icon: 'log',
  title: 'A log of what you know',
  body: 'Mark what you have heard or read, so you can pick a case up where you left it.'
}];