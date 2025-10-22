import client from '../../../../lib/db.js';

export async function POST(req) {
  try {
    const body = await req.json();
    const { country } = body;

    if (!country) {
      return new Response(JSON.stringify({ success: false, error: 'Country is required' }), {
        status: 400,
      });
    }

    // Insert or update download count atomically
    await client.query(
      `
      INSERT INTO downloads (country, download_count, last_download)
      VALUES ($1, 1, NOW())
      ON CONFLICT (country)
      DO UPDATE SET 
        download_count = downloads.download_count + 1,
        last_download = NOW();
      `,
      [country]
    );

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Download API Error:", err);
    return new Response(JSON.stringify({ success: false, error: 'Database error' }), { status: 500 });
  }
}
