require("dotenv").config();
const supabase = require("./lib/supabase");

async function check() {
  console.log("🔗 Connecting to Yin and Yang database...");
  const { data, error } = await supabase.from("profiles").select("count");

  if (error) {
    console.error("❌ Connection failed:", error.message);
  } else {
    console.log(
      "✅ SUCCESS! Your local project is officially talking to Supabase.",
    );
  }
}

check();
