import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'inline-css',
      enforce: 'post',
      generateBundle(_, bundle) {
        const cssFile = Object.values(bundle).find(chunk => chunk.type === 'asset' && chunk.fileName.endsWith('.css'));
        const htmlFile = bundle['index.html'];
        if (cssFile && htmlFile) {
          htmlFile.source = htmlFile.source
            .replace('</head>', `<style>${cssFile.source}</style></head>`)
            .replace(/<link rel="stylesheet"[^>]*>/, '');
          delete bundle[cssFile.fileName];
        }
      }
    }
  ],
})
