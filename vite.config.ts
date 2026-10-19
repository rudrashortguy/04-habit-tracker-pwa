import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
    "registerType": "autoUpdate",
    "manifest": {
        "name": "StreakLoop - Habit Loops & Streak Visualization",
        "short_name": "StreakLoop",
        "description": "Build lasting habits with daily check-ins, heatmap contribution graphs, reminder notifications, and offline sync.",
        "theme_color": "#8B5CF6",
        "background_color": "#ffffff",
        "display": "standalone",
        "icons": [
            {
                "src": "pwa-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "pwa-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            }
        ]
    }
})
  ]
});
