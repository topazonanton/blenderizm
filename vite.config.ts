import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
      // Serve the local `frames` folder at /frames during dev so images load from that path
      middlewareMode: false,
      setup: undefined,
      // Use configureServer to mount a lightweight static handler
      configureServer(server) {
        server.middlewares.use('/frames', (req, res, next) => {
          try {
            const url = decodeURIComponent(req.url || '').split('?')[0];
            const filePath = path.join(__dirname, 'frames', url);
            if (!fs.existsSync(filePath)) return next();
            const stat = fs.statSync(filePath);
            if (!stat.isFile()) return next();
            const stream = fs.createReadStream(filePath);
            const ext = path.extname(filePath).toLowerCase();
            const mime = ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : ext === '.png' ? 'image/png' : 'application/octet-stream';
            res.statusCode = 200;
            res.setHeader('content-type', mime);
            stream.pipe(res);
          } catch (err) {
            next();
          }
        });
      },
    },
  };
});
