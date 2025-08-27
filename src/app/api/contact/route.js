import pool from "@/lib/db";

// Save new message (POST)
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "All fields are required" }),
        { status: 400 }
      );
    }

    const [result] = await pool.query(
      "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );

    return new Response(
      JSON.stringify({ success: true, id: result.insertId }),
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ POST /api/contact error:", error); // log exact error
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}

// Fetch all messages (GET)
export async function GET() {
  try {
    const [rows] = await pool.query(
      "SELECT id, name, email, message, created_at FROM contact_messages ORDER BY id DESC"
    );

    return new Response(JSON.stringify({ success: true, data: rows }), {
      status: 200,
    });
  } catch (error) {
    console.error("❌ GET /api/contact error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
