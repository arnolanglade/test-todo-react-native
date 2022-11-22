module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
     project: './tsconfig.json'
  }
};
