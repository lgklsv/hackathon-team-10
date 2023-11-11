import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: env.HOST,
          // target: 'https://hackathon-team-10.vercel.app/',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
