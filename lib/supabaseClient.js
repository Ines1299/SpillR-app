import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Make sure to install @supabase/supabase-js with npm and have an .env file with the url and anon key
// In expo/react native environment variables must start with EXPO_PUBLIC
