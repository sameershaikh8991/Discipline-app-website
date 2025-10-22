import client from '../../src/lib/db.js';

export async function handler(event, context) {
  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const body = JSON.parse(event.body);
    const { country } = body;

    if (!country) {
      return { statusCode: 400, body: JSON.stringify({ success: false, error: 'Country is required' }) };
    }

    // Insert or update download count
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

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error("Download API Error:", err);
    return { statusCode: 500, body: JSON.stringify({ success: false, error: 'Database error' }) };
  }
}
