import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      // Proxy requests to /graphql to your GraphQL server
      "/graphql": {
        target: "http://localhost:3001", // The address of your GraphQL server
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/graphql/, "/graphql"),
      },
    },
  },
});
