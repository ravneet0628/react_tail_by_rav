import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react({
      // React 19 optimizations
      jsxRuntime: 'automatic',
      jsxImportSource: 'react',
    })
  ],
  
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ReactTailByRav',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'esm' : format}.js`
    },
    
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    
    // Modern browser support for 2025
    target: 'es2022',
    minify: 'esbuild',
    sourcemap: true,
    
    // Output settings
    outDir: 'dist',
    emptyOutDir: true,
    
    // Type definitions
    copyPublicDir: false
  },
  
  esbuild: {
    target: 'es2022',
    jsx: 'automatic',
    jsxImportSource: 'react'
  },
  
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@/components': resolve(__dirname, './src/components'),
      '@/hooks': resolve(__dirname, './src/hooks'),
      '@/utils': resolve(__dirname, './src/utils'),
      '@/types': resolve(__dirname, './src/types')
    }
  },
  
  // Development server
  server: {
    port: 3000,
    open: true
  },
  
  // CSS processing
  css: {
    postcss: './postcss.config.mjs'
  }
}) 