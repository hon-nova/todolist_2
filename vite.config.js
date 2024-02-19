import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/todolist_2/",
  plugins: [react()],
  build: {
    // Set custom HTML attributes for the output HTML files
    html: {
      // Add attributes to the script tag in the output HTML files
      script: {
        // Set the type attribute for JavaScript files to "module"
        type: 'module',
      },
    }
  }
})
