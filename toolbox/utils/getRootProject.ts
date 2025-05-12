import path from 'path';

/**
 * @returns {string} The root project directory path or null if not found.
 */
export function getRootProject() {
  const rootDir = path.resolve(__dirname, '../../');

  return rootDir;
}
