const supabase = require('../lib/supabase');

async function getLeaderboard(req, res) {
  try {
    const { data, error } = await supabase
      .from('results')
      .select(`
        id,
        wpm,
        accuracy,
        mode,
        created_at,
        profiles (
          id,
          username
        )
      `)
      .order('wpm', { ascending: false })
      .limit(10);

    if (error) {
      console.error('Supabase query error:', error);
      return res.status(500).json({ error: 'Failed to fetch leaderboard' });
    }

    const formattedData = data.map((row) => ({
      id: row.id,
      wpm: row.wpm,
      accuracy: row.accuracy,
      mode: row.mode,
      createdAt: row.created_at,
      user: row.profiles ? {
        id: row.profiles.id,
        username: row.profiles.username
      } : null
    }));

    return res.status(200).json({ data: formattedData });

  } catch (err) {
    console.error('Get leaderboard error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { getLeaderboard };
