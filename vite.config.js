import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'yourusername' and 'repositoryname' with your GitHub username and repository name
export default defineConfig({
  plugins: [react()],
  base: '/pinterest-copy/',
})
