import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // @ts-ignore
  base: process.env.GITHUB_ACTIONS ? "/3D-Portfolio/" : "/",
});

