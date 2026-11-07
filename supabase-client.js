
/* OumayStore - Supabase public client */
(() => {
  const SUPABASE_URL = "https://rpeffdxpsfqfkgwigpeg.supabase.co";
  const SUPABASE_KEY = "sb_publishable_N7YDfMqvR-0DWHqKwpOy5Q_GtdsMpG4";

  if (!window.supabase?.createClient) {
    console.error("Supabase SDK not loaded");
    return;
  }

  const client = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );

  window.OumaySupabase = { client };
})();
