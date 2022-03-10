module.exports = {
  "presets": [
      "@babel/preset-env"
  ],
  // 注意：decorators插件要位于properties插件之前
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import"
  ]
}