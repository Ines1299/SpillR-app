import { supabase } from "../lib/supabaseClient";

export default async function getTvShowByName(name) {
  const { data, error } = await supabase // get tv show by name
    .from("tv_shows")
    .select("*")
    .ilike("name", name)
    .single();

  if (error) {
    throw error;
  }
  return data;
}
