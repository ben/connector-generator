import fs from 'fs';

console.log('Building the project...');

const manifest = require('../manifest');
const json = JSON.stringify(manifest, null, 2);

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/manifest.json', json, 'utf8');
console.log('Manifest built successfully.');
