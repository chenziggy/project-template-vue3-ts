import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import checker from "vite-plugin-checker"; // 导入包

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    checker({
      eslint: {
        lintCommand: 'eslint "./src/**/*.{vue,js,ts}"',
      },
      stylelint: {
        lintCommand: 'stylelint ./src/**/*.{css,vue} --custom-syntax postcss-html',
      },
      vueTsc: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: "./src",
      },
    ],
  },
});
