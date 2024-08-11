module.exports = {
  plugins: [
    "prettier-plugin-go-template",
    "prettier-plugin-toml"
  ],
  trailingComma: "es5",
  tabWidth: 2,
  printWidth: 80,
  arrowParens: "always",
  bracketSpacing: true,
  htmlWhitespaceSensitivity: "css",
  bracketSameLine: false,
  jsxSingleQuote: false,
  goTemplateBracketSpacing: true,
  overrides: [
    {
      files: ["*.html"],
      options: {
        parser: "go-template"
      }
    },
    {
      files: ["*.md"],
      options: {
        parser: "markdown"
      }
    },
    {
      files: ["*.yaml", "*.yml"],
      options: {
        parser: "yaml",
        goTemplateBracketSpacing: true
      }
    },
    {
      files: ["*.toml"],
      options: {
        parser: "toml",
        goTemplateBracketSpacing: true
      }
    },
    {
      files: ["*.json"],
      options: {
        parser: "json",
        goTemplateBracketSpacing: true
      }
    },
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      options: {
        parser: "babel"
      }
    },
    {
      files: ["*.css"],
      options: {
        parser: "css"
      }
    }
  ]
}
