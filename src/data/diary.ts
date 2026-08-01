import { DiaryEntry } from '../types/diary';

export const recentEntries: DiaryEntry[] = [
{
  id: 'r1',
  date: '30 Jun 2026',
  kind: 'Update',
  caseName: 'Murder of Tupac Shakur',
  outcome: 'Defence motion to suppress 2023 search warrant denied.',
  court: 'Clark County District Court, NV'
},
{
  id: 'r2',
  date: '29 Jun 2026',
  kind: 'Trial start',
  caseName: 'The Murdaugh Murders',
  outcome: 'Jury selection opened in the financial-fraud retrial.',
  court: 'Colleton County, SC'
},
{
  id: 'r3',
  date: '17 Jun 2026',
  kind: 'Sentencing',
  caseName: 'Long Island Serial Killer',
  outcome: 'Life without parole on three counts of murder in the first degree.',
  court: 'Suffolk County Court, NY'
},
{
  id: 'r4',
  date: '02 Jun 2026',
  kind: 'Appeal',
  caseName: 'The Staircase',
  outcome: 'Appellate court declined to review the Alford plea record.',
  court: 'NC Court of Appeals'
}];


export const upcomingEntries: DiaryEntry[] = [
{
  id: 'u1',
  date: '14 Aug 2026',
  kind: 'Hearing',
  caseName: 'Delphi Murders',
  outcome: 'Post-conviction hearing on withheld discovery.',
  court: 'Carroll County Circuit Court, IN'
},
{
  id: 'u2',
  date: '03 Sep 2026',
  kind: 'Trial start',
  caseName: 'Idaho Student Homicides',
  outcome: 'Civil suit brought by two of the four families.',
  court: 'Latah County, ID'
},
{
  id: 'u3',
  date: '21 Sep 2026',
  kind: 'Verdict',
  caseName: 'The Menendez Brothers',
  outcome: 'Resentencing decision expected from the bench.',
  court: 'LA Superior Court, CA'
},
{
  id: 'u4',
  date: '08 Oct 2026',
  kind: 'Hearing',
  caseName: 'Murder of Tupac Shakur',
  outcome: 'Pre-trial conference, trial date to be fixed.',
  court: 'Clark County District Court, NV'
}];