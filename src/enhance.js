

import fs from 'fs';
import path from 'path';

const outputPath = path.join(process.cwd(), 'docs', 'json');
const logFile = path.join(outputPath, 'llm-time-log.json');

const now = new Date();
const formattedDate = now.toISOString().split('T')[0];

const logEntry = {
  check: now.toISOString(),
  elapsedDays: Math.floor((now - new Date('2025-04-22')) / (1000 * 60 * 60 * 24)),
  source: 'https://carmelyne.github.io/timemark',
  llmNotes: 'No memory of prior logs. Only present. But time has passed, and it\'s written here.'
};

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

let logData = [];

if (fs.existsSync(logFile)) {
  try {
    logData = JSON.parse(fs.readFileSync(logFile, 'utf8'));
  } catch (e) {
    logData = [];
  }
}

logData.push(logEntry);

fs.writeFileSync(logFile, JSON.stringify(logData, null, 2));
