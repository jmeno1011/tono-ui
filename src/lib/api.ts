import { createClient } from "@supabase/supabase-js";
import { REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_KEY } from "./constants";

export const supabase = createClient(
  REACT_APP_SUPABASE_URL,
  REACT_APP_SUPABASE_KEY
);

export const db = {
  getUserInfo: ()=>supabase.from('USER_INFO'),
  getPUser: ()=> supabase.from('P_USER'),
}