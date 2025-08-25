import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // biar langsung bisa pakai `describe`, `it`, `expect`
    environment: "node", // bisa diganti "jsdom" kalau browser-like
  },
});
