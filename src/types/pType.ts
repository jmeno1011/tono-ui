export type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export interface UserInfo {
  id: number;
  CODE: string;
  NAME: string;
  ROUND: number;
  EMAIL: string;
  AGE: number;
  SEX: string;
};

// export interface 