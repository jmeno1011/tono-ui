export type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export interface PUserInfo {
  id: number;
  CODE: string;
  NAME: string;
  ROUND: number;
  EMAIL: string;
  AGE: number;
  SEX: string;
};

export interface PSurveyResult {
  id: number;
  CODE: string;
  SEQ: number;
  START_DATE: string;
  END_DATE: string;
  Q01: number;
  Q02: number;
  Q03: number;
  Q04: number;
  Q05: number;
  Q06: number;
  Q07: number;
  Q08: number;
  Q09: number;
  Q10: number;
  Q11: number;
  Q12: number;
  Q13: number;
  Q14: number;
  Q15: number;
  Q16: number;
  Q17: number;
  Q18: number;
  Q19: number;
  Q20: number;
  Q21: number;
  TOTAL: number;
  LEVEL: number;
  FIGURE1: number;
  FIGURE2: number;
  FIGURE3: number;
  PROCESS_STATE: string;
}

export interface Figures {
  figure1: number | string;
  figure2: number | string;
  figure3: number | string;
}

export interface ModalState {
  showCalendar: boolean;
  showSearchbar: boolean;
}

export interface IScoreList {
  id: string;
  score: number,
  text: string;
}

export interface IScore{
  [key: string] : {
    score: number
  }
}