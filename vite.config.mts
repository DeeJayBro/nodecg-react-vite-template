import { defineConfig } from 'vite';
import NodeCGPlugin from './vite-nodecg.mjs';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react(), NodeCGPlugin({
        inputs: {
            "graphics/*.tsx": "./src/graphics/template.html",
            "dashboard/*.tsx": "./src/dashboard/template.html"
        }
    })]
})