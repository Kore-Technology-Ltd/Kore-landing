import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@lib': fileURLToPath(new URL('./lib', import.meta.url))
      }
    },
    define: {
      'process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT': JSON.stringify(
        env.NEXT_PUBLIC_WAITLIST_ENDPOINT || ''
      )
    }
  }
})
