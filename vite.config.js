import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh for better development experience
      fastRefresh: true,
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    allowedHosts: [
      '5173-iwp7kd1i4o9nfyyg1bi4p-23a4ab7d.manusvm.computer',
      'localhost',
      '127.0.0.1',
    ],
  },
  build: {
    // Performance optimizations for production builds
    target: 'es2015', // Support modern browsers for better performance
    minify: 'terser', // Use terser for better minification
    cssMinify: true,
    
    // Code splitting configuration
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Vendor chunk for third-party libraries
          vendor: ['react', 'react-dom'],
          // UI components chunk
          ui: [
            './src/components/ServicesSection.jsx',
            './src/components/ReviewsSection.jsx',
            './src/components/ContactSection.jsx',
            './src/components/AboutSection.jsx'
          ]
        },
        // Optimize chunk file names for caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(css)$/.test(assetInfo.name)) {
            return `assets/css/[name]-[hash].${ext}`;
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash].${ext}`;
          }
          return `assets/[name]-[hash].${ext}`;
        }
      }
    },
    
    // Terser options for better compression
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true, // Remove debugger statements
        pure_funcs: ['console.log'], // Remove specific function calls
      },
      mangle: {
        safari10: true, // Fix Safari 10 issues
      },
    },
    
    // Asset optimization
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    
    // Source map configuration
    sourcemap: false, // Disable source maps in production for smaller bundle size
    
    // Chunk size warnings
    chunkSizeWarningLimit: 500, // Warn for chunks larger than 500kb
  },
  
  // CSS optimization
  css: {
    devSourcemap: true, // Enable CSS source maps in development
    preprocessorOptions: {
      css: {
        // CSS optimization options
        charset: false, // Remove charset declaration
      }
    }
  },
  
  // Dependency optimization
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
    ],
    // Force optimization of specific dependencies
    force: false,
  },
  
  // Preview server configuration (for production preview)
  preview: {
    port: 4173,
    host: true,
  },
  
  // Define global constants
  define: {
    // Remove development-only code in production
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
  },
});

