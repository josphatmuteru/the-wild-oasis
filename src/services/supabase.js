import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lsvedpceljnmtsjfgplu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzdmVkcGNlbGpubXRzamZncGx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAzOTcwMjAsImV4cCI6MjAwNTk3MzAyMH0.pv08TZLBeLJTs1QNfMmg3kcVUSiShMExOT3cfvKf5Rc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
