import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

const routes = {
  'main/main.html': '',
  'profilePage/profilePage.html': '#about',
  'skills/skills.html': '#skills',
  'projects/projects.html': '#projects',
  'projects/RoboSoccer/robo.html': '#project/robosoccer',
  'projects/DVS/dvs.html': '#project/carbon',
  'projects/AiTowa/AiTowa.html': '#project/towa',
  'projects/RSA/rsa.html': '#project/rsa',
  'projects/BananaW/BananaW.html': '#project/bananaw',
};

for (const [path, hash] of Object.entries(routes)) {
  const target = `${'../'.repeat(path.split('/').length - 1)}index.html${hash}`;
  const destination = `dist/${path}`;
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(
    destination,
    `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url=${target}"><title>Louis Copmartin</title><script>window.location.replace(${JSON.stringify(target)})</script></head><body><a href="${target}">Louis Copmartin — Portfolio</a></body></html>`,
  );
}
