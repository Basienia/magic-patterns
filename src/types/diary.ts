export type DiaryEventKind =
'Trial start' |
'Sentencing' |
'Hearing' |
'Appeal' |
'Update' |
'Verdict';

export interface DiaryEntry {
  id: string;
  date: string;
  kind: DiaryEventKind;
  caseName: string;
  outcome: string;
  court: string;
}