// tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // entry utama
  format: ["cjs", "esm"], // output CJS & ESM
  dts: true, // generate declaration file
  splitting: false, // tidak perlu code splitting untuk library kecil
  sourcemap: false, // nonaktifkan source map untuk publik
  minify: true, // minify bundle
  clean: true, // bersihkan folder dist sebelum build
  target: "es2020", // target modern JS
  bundle: true, // bundling semua import (JSON + TS)
  external: [], // jika ada paket luar, tulis di sini
});
