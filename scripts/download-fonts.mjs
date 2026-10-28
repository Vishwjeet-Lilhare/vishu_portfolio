import { mkdir, writeFile } from 'node:fs/promises';

await mkdir('public/fonts', { recursive: true });
const fonts = [
  { query: 'Barlow+Condensed:wght@700', name: 'barlow-condensed', license: 'barlowcondensed' },
  { query: 'DM+Sans:wght@400..700', name: 'dm-sans', license: 'dmsans' },
  { query: 'IBM+Plex+Mono:wght@400', name: 'ibm-plex-mono', license: 'ibmplexmono' },
];
const results = await Promise.allSettled(fonts.map(async font => {
  const response = await fetch(`https://fonts.googleapis.com/css2?family=${font.query}&display=swap`, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36' } });
  if (!response.ok) throw new Error(`Font CSS failed: ${response.status}`);
  const css = await response.text();
  const url = [...css.matchAll(/url\((https[^)]+)\)/g)].at(-1)?.[1];
  if (!url || !url.endsWith('.woff2')) throw new Error(`No WOFF2 found for ${font.name}`);
  const asset = await fetch(url);
  if (!asset.ok) throw new Error(`Font download failed: ${asset.status}`);
  await writeFile(`public/fonts/${font.name}-latin.woff2`, Buffer.from(await asset.arrayBuffer()));
  const license = await fetch(`https://raw.githubusercontent.com/google/fonts/main/ofl/${font.license}/OFL.txt`);
  if (!license.ok) throw new Error(`License download failed: ${license.status}`);
  await writeFile(`public/fonts/${font.name}-OFL.txt`, await license.text());
  console.log(`Downloaded ${font.name} Latin font and license.`);
}));
for (const result of results) if (result.status === 'rejected') throw result.reason;
