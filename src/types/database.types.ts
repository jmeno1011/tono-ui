// export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      P_USER: {
        Row: {               // the data expected from .select()
          id: number
          CODE: string
          SEQ: number;
          START_DATE: string | null;
          END_DATE: string | null;
          Q01: number | null;
          Q02: number | null;
          Q03: number | null;
          Q04: number | null;
          Q05: number | null;
          Q06: number | null;
          Q07: number | null;
          Q08: number | null;
          Q09: number | null;
          Q10: number | null;
          Q11: number | null;
          Q12: number | null;
          Q13: number | null;
          Q14: number | null;
          Q15: number | null;
          Q16: number | null;
          Q17: number | null;
          Q18: number | null;
          Q19: number | null;
          Q20: number | null;
          Q21: number | null;
          TOTAL: number | null;
          LEVEL: number | null;
          FIGURE1: number | null;
          FIGURE2: number | null;
          FIGURE3: number | null;
          PROCESS_STATE: string | null;
        }
        Insert: {            // the data to be passed to .insert()
          id: number
          CODE: string
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
        Update: {            // the data to be passed to .update()
          id: number
          CODE: string
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
      }
    }
  }
}