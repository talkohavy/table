import fs from 'fs/promises';
import path from 'path';
import { Plugin } from 'vite';
import { getRootProject } from '../utils/getRootProject';

const PROJECT_NAME = 'table';

export function postBuildFixSourcemapUrlsPlugin(): Plugin {
  const rootDir = getRootProject();

  return {
    name: 'post-build-fix-sourcemap-urls-plugin',
    closeBundle: {
      sequential: true,
      order: 'post',
      async handler() {
        await fixFilesUnderStaticJsDir(rootDir);

        await fixMainJsFile(rootDir);

        await fixHtmlFile(rootDir);
      },
    },
  };
}

async function fixFilesUnderStaticJsDir(rootDir: string) {
  const jsDir = path.resolve(rootDir, 'dist/static/js');

  const isDistStaticJsDirExists = await fs
    .access(jsDir)
    .then(() => true)
    .catch(() => false);

  if (!isDistStaticJsDirExists) throw new Error(`The directory ${jsDir} does not exist.`);

  const promisesArr: Array<Promise<void>> = [];

  const jsFiles = (await fs.readdir(jsDir)).filter((file) => file.endsWith('.js'));

  for (const file of jsFiles) {
    const filePath = path.join(jsDir, file);
    let content = await fs.readFile(filePath, 'utf8');

    content = content.replace(
      /\/\/# sourceMappingURL=(.+)\.js\.map/,
      '//# sourceMappingURL=../../sourcemaps/$1.js.map',
    );

    const writeFile = fs.writeFile(filePath, content);
    promisesArr.push(writeFile);
  }

  await Promise.all(promisesArr);
}

async function fixMainJsFile(rootDir: string) {
  const mainDir = path.resolve(rootDir, 'dist/main');

  const isDistMainJsDirExists = await fs
    .access(mainDir)
    .then(() => true)
    .catch(() => false);

  if (!isDistMainJsDirExists) throw new Error(`The directory ${mainDir} does not exist.`);

  const mainFiles = await fs.readdir(mainDir);

  for (const file of mainFiles) {
    const filePath = path.join(mainDir, file);
    let content = await fs.readFile(filePath, 'utf8');

    content = content
      .replace(/\/\/# sourceMappingURL=(.+)\.js\.map/, '//# sourceMappingURL=../sourcemaps/$1.js.map')
      .replaceAll(/"static\//g, `"${PROJECT_NAME}/static/`);

    await fs.writeFile(filePath, content);
  }
}

async function fixHtmlFile(rootDir: string) {
  const htmlFilePath = path.resolve(rootDir, 'dist/index.html');

  const isDistHtmlFileExists = await fs
    .access(htmlFilePath)
    .then(() => true)
    .catch(() => false);

  if (!isDistHtmlFileExists) throw new Error(`The file ${htmlFilePath} does not exist.`);

  let content = await fs.readFile(htmlFilePath, 'utf8');

  content = content.replaceAll(/="\//g, `="/${PROJECT_NAME}/`);

  await fs.writeFile(htmlFilePath, content);
}
