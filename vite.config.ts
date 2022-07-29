import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// git config --global user.name "Your Name"
// git config --global user.email "youremail@yourdomain.com"
