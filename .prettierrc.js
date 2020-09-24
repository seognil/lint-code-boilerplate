module.exports = {
  arrowParens: "always",
  printWidth: 120,
  trailingComma: "all",
  tabWidth: 2,
  quoteProps: "consistent",
  semi: true,
  useTabs: false,
  overrides: [
    {
      files: "*.md",
      options: {
        printWidth: 60,
      },
    },
  ],
};
