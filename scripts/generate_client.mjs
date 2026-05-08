import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const apis = readdirSync(join(root, 'src/apis'))
    .filter(f => f.endsWith('Api.ts'))
    .map(f => f.replace(/\.ts$/, ''))
    .sort();

const memberName = api => api[0].toLowerCase() + api.slice(1).replace(/Api$/, '');

const sections = {
    imports:     apis.map(a => `    ${a},`).join('\n'),
    properties:  apis.map(a => `    ${memberName(a)}: ${a};`).join('\n'),
    assignments: apis.map(a => `        this.${memberName(a)} = new ${a}(this.config);`).join('\n'),
};

const endTags = new Set(Object.keys(sections).map(k => `// @generated:${k}:end`));

const clientPath = join(root, 'src/client.ts');
const lines = readFileSync(clientPath, 'utf8').split('\n');

let output = [], skip = false, found = new Set();
for (const line of lines) {
    const tag = line.trim();
    if (endTags.has(tag)) { skip = false; output.push(line); continue; }
    if (!skip) output.push(line);
    for (const [key, content] of Object.entries(sections)) {
        if (tag === `// @generated:${key}`) {
            skip = true;
            found.add(key);
            output.push(content);
        }
    }
}

const missing = Object.keys(sections).filter(k => !found.has(k));
if (missing.length) { console.error(`error: missing markers: ${missing.join(', ')}`); process.exit(1); }

writeFileSync(clientPath, output.join('\n'), 'utf8');
console.log(`Updated client.ts: ${apis.length} APIs`);
