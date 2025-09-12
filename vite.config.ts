import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Security headers for development server
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  },
  // Preview server security
  preview: {
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Security and performance optimizations
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Enhanced security through file name obfuscation
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks: {
          // Separate vendor chunks for better caching
          react: ['react', 'react-dom'],
          particles: ['react-tsparticles', 'tsparticles', 'tsparticles-basic', 'tsparticles-shape-polygon', 'tsparticles-shape-star', 'tsparticles-shape-image'],
          ui: ['@radix-ui/react-toast', '@radix-ui/react-tooltip', '@radix-ui/react-accordion'],
          icons: ['lucide-react'],
        },
      },
    },
    // Security: Disable source maps in production
    sourcemap: false,
    // Minimize bundle size with enhanced security
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true, // Remove debugger statements
        pure_funcs: ['console.info', 'console.debug', 'console.warn'], // Remove specific console methods
        passes: 2, // Run compression twice for better results
      },
      mangle: {
        safari10: true, // Handle Safari 10+ bug
      },
      format: {
        comments: false, // Remove all comments for security
      },
    },
    // Security configurations
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false, // Don't report sizes for security
    emptyOutDir: true,
  },
}));
