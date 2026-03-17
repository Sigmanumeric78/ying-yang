const supabase = require('../lib/supabase');

const MAX_WPM = 250;
const MIN_ACCURACY = 0;
const MAX_ACCURACY = 100;

function validateAntiCheat(result) {
  const errors = [];

  if (result.wpm > MAX_WPM) {
    errors.push(`WPM ${result.wpm} exceeds maximum allowed (${MAX_WPM})`);
  }

  if (result.wpm < 0) {
    errors.push('WPM cannot be negative');
  }

  if (result.accuracy < MIN_ACCURACY || result.accuracy > MAX_ACCURACY) {
    errors.push(`Accuracy must be between ${MIN_ACCURACY} and ${MAX_ACCURACY}`);
  }

  const validModes = ['time', 'words', 'quote'];
  if (!validModes.includes(result.mode)) {
    errors.push(`Invalid test mode: ${result.mode}`);
  }

  return errors;
}

async function submitResult(req, res) {
  try {
    const { wpm, accuracy, mode, stats } = req.body;

    if (wpm === undefined || accuracy === undefined || !mode || !stats) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const result = {
      wpm: parseFloat(wpm),
      accuracy: parseFloat(accuracy),
      mode,
      stats
    };

    const cheatErrors = validateAntiCheat(result);
    if (cheatErrors.length > 0) {
      return res.status(400).json({
        error: 'Validation failed',
        details: cheatErrors
      });
    }

    const insertData = {
      wpm: result.wpm,
      accuracy: result.accuracy,
      mode: result.mode,
      stats: result.stats
    };

    if (req.user) {
      insertData.user_id = req.user.id;
    }

    const { data, error } = await supabase
      .from('results')
      .insert(insertData)
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({ error: 'Failed to save result' });
    }

    return res.status(201).json({
      message: 'Result saved successfully',
      result: data
    });

  } catch (err) {
    console.error('Submit result error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { submitResult };
