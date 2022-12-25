import { defineConfig } from "vitest/config";
import { splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  test: {
    coverage: {
      reporter: ["html"],
    },
  },
});
