const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  pages: {
    index: {
      entry: "src/main.ts",
      title: "Bem Paggo Challenge",
    },
  },
  transpileDependencies: true,
});
