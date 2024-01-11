import { createClient } from "@supabase/supabase-js";
import { REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_KEY } from "../constants";

export const supabase = createClient(
  REACT_APP_SUPABASE_URL,
  REACT_APP_SUPABASE_KEY
);

export const db = {
  selectUserInfo: ()=> supabase.from('P_USER_INFO'),
  selectSurveyResult: ()=>supabase.from('P_SURVEY_RESULT'),
}