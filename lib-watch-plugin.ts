import { Plugin } from 'vite';
import path from 'path';

/**
 * Creates a Vite plugin that watches the lib directory for changes and triggers HMR
 */
export function libWatchPlugin(): Plugin {
  return {
    name: 'vite-plugin-lib-watcher',
    configureServer(server) {
      // Get the absolute path to the lib directory
      const libDir = path.resolve(process.cwd(), 'lib');

      // Add lib directory to watcher
      const watcher = server.watcher;
      watcher.add(path.join(libDir, '**/*'));

      console.log('✅ Watching lib directory for changes:', libDir);

      // Log when changes are detected
      watcher.on('change', (filePath) => {
        if (filePath.includes('/lib/')) {
          console.log(`File changed in lib directory: ${filePath}`);
          // This will force the client to refresh when lib files change
          server.ws.send({
            type: 'full-reload',
            path: '*',
          });
        }
      });
    },
  };
}
