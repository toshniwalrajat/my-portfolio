import pool from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM resume LIMIT 1");
    return new Response(JSON.stringify(rows[0]), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "DB Error" }), { status: 500 });
  }
}
