import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/index.ts"],
  bundle: true,
  splitting: true,
  outDir: "dist",
  format: ["cjs", "esm"],
  dts: true,
  treeshake: true,
  minify: true,
});
