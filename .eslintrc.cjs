module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier' // <--- Added here (must be last to override others)
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'react/prop-types': 'off',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          { name: '@mui/material', message: 'Use App* wrappers from src/components/ui instead of raw MUI imports.' },
          { name: '@mui/icons-material', message: 'Use approved icon map files for icons.' },
          { name: '@emotion/react', message: 'Only theme infrastructure may import emotion directly.' },
          { name: '@emotion/styled', message: 'Only theme infrastructure may import emotion directly.' },
        ],
        patterns: [
          { group: ['@mui/icons-material/*'], message: 'Use approved icon map files for icons.' },
          { group: ['@emotion/*'], message: 'Use theme utilities instead of direct emotion imports.' },
        ],
      },
    ],
  },
  overrides: [
    {
      files: [
        'src/components/ui/**',
        'src/components/core/AppThemeProvider.jsx',
        'src/styles/**',
        'src/theme/**',
        'src/components/recruiter/iconMap.js',
        'src/components/social/socialIconMap.js',
        'src/components/ui/iconMap.js',
      ],
      rules: {
        'no-restricted-imports': 'off',
      },
    },
  ],
};
