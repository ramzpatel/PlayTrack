import { NextResponse } from 'next/server';

// This function securely fetches an access token from Twitch
async function getTwitchAccessToken() {
  const res = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${process.env.IGDB_CLIENT_ID}&client_secret=${process.env.IGDB_CLIENT_SECRET}&grant_type=client_credentials`, {
    method: 'POST',
  });
  const data = await res.json();
  return data.access_token;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { searchQuery } = body;

    const token = await getTwitchAccessToken();

    // Ask IGDB for games matching the search query, including their cover art and platforms
    const igdbRes = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: {
        'Client-ID': process.env.IGDB_CLIENT_ID!,
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'text/plain',
      },
      body: `search "${searchQuery}"; fields name, cover.url, first_release_date, platforms.name; limit 10;`,
    });

    const games = await igdbRes.json();
    return NextResponse.json(games);

  } catch (error) {
    console.error("IGDB Fetch Error:", error);
    return NextResponse.json({ error: 'Failed to fetch games' }, { status: 500 });
  }
}