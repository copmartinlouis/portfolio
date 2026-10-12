import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, extname } from 'node:path';

const files = await readdir('dist/assets');
const scriptName = files.find((file) => file.endsWith('.js'));
const styleName = files.find((file) => file.endsWith('.css'));
let script = await readFile(`dist/assets/${scriptName}`, 'utf8');
let style = await readFile(`dist/assets/${styleName}`, 'utf8');
const mimeTypes = { '.png': 'image/png', '.woff2': 'font/woff2', '.svg': 'image/svg+xml' };

for (const file of files.filter((file) => !file.endsWith('.js') && !file.endsWith('.css'))) {
  const data = await readFile(`dist/assets/${file}`);
  const uri = `data:${mimeTypes[extname(file).toLowerCase()] || 'application/octet-stream'};base64,${data.toString('base64')}`;
  script = script.replaceAll(file, uri);
  style = style.replaceAll(`./${file}`, uri);
}

const favicon = await readFile('public/favicon.svg');
const faviconUri = `data:image/svg+xml;base64,${favicon.toString('base64')}`;
const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#f4f3ef"><meta name="description" content="Louis Copmartin, développeur logiciel. Portfolio personnel."><title>Louis Copmartin — Développeur logiciel</title><link rel="icon" href="${faviconUri}"><style>${style.replaceAll('</style', '<\\/style')}</style></head><body><div id="root"></div><script type="module">${script.replaceAll('</script', '<\\/script')}</script></body></html>`;
const destination = process.argv[2] || 'docs/preview.html';
await mkdir(dirname(destination), { recursive: true });
await writeFile(destination, html);
console.log(destination);
