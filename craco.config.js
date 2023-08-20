const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@data": path.resolve(__dirname, "src/data"),
    },
  },
  babel: {
    preset: ["@emotion/babel-preset-css-prop"], // emotion을 사용할 수 있게 됨.
  },
};
