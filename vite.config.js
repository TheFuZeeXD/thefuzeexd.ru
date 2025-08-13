import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import php from 'vite-plugin-php'

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
    php()
  ],
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        entryFileNames: 'assets/[name].[hash].js'
      }
    }
  },
  // Добавляем поддержку HTML импортов
  optimizeDeps: {
    include: ['*.html']
  }
})