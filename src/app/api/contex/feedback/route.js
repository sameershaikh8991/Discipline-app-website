import client from '../../../../lib/db.js';

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstname, lastname, email, phnumber, Message } = body;

    await client.query(
      'INSERT INTO feedback (firstname, lastname, email, phnumber, message) VALUES ($1,$2,$3,$4,$5)',
      [firstname, lastname, email, phnumber, Message]
    );

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: 'Database error' }), { status: 500 });
  }
}