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
          'react-router': ['react-router-dom'],
          particles: ['@tsparticles/engine', '@tsparticles/basic', '@tsparticles/shape-polygon', '@tsparticles/shape-star', '@tsparticles/react'],
          ui: ['@radix-ui/react-toast', '@radix-ui/react-tooltip', '@radix-ui/react-accordion', '@radix-ui/react-dialog'],
          icons: ['lucide-react'],
          forms: ['@emailjs/browser', '@hookform/resolvers'],
        },
      },
      // Additional optimizations
      treeshake: 'recommended',
    },
    // Security: Disable source maps in production
    sourcemap: false,
    // Minimize bundle size with enhanced security and performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true, // Remove debugger statements
        pure_funcs: ['console.info', 'console.debug', 'console.warn'], // Remove specific console methods
        passes: 3, // Run compression 3x for better results
        unsafe_arrows: true, // Optimize arrow functions
        unsafe_methods: true, // Optimize method calls
        hoist_funs: true, // Hoist function declarations
        keep_fargs: false, // Remove unused function arguments
      },
      mangle: {
        safari10: true, // Handle Safari 10+ bug
        toplevel: true, // Mangle top-level names
      },
      format: {
        comments: false, // Remove all comments for security
        ascii_only: true, // Ensure ASCII output
      },
    },
    // Performance optimizations
    target: 'es2020', // Modern JS target for better performance
    chunkSizeWarningLimit: 600, // Smaller chunks for better loading - reduced from 800
    reportCompressedSize: false, // Don't report sizes for security
    emptyOutDir: true,
    cssCodeSplit: true, // Split CSS for better caching
    assetsInlineLimit: 2048, // Reduced from 4096 for smaller initial bundle
    // Enable modern build optimizations
    cssMinify: true,
  },
}));
