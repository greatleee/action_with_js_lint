module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: false,
  bracketSpacing: false,
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',

  plugins: ['prettier-plugin-svelte'],
  svelteSortOrder: 'options-scripts-markup-styles',
  svelteStrictMode: false,
  svelteIndentScriptAndStyle: true,
}
