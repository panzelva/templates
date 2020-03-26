const path = require("path");

module.exports = (env, argv) => [
  {
    entry: path.join(__dirname, "src", "main", "electron.ts"),
    target: "electron-main",
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: /src/,
          use: [{ loader: "ts-loader" }]
        }
      ]
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "electron.js"
    }
  }
];
