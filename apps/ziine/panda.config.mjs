import { defineConfig } from '@pandacss/dev';
import { defaultPreset } from '@ziine/design';

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
    './node_modules/@ziine/design/dist/panda.buildinfo.json'
  ],
  // Files to exclude
  exclude: [],
  presets: [defaultPreset],
  // The output directory for your css system
  outdir: './src/styled-system',
});
