import globals from 'globals/index.js'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt().prepend(
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/strongly-recommended'],
  eslintConfigPrettier,
  {
    ignores: [
      'node_modules',
      'dist',
      'public',
      '.nuxt',
      'docs/**/*',
      'DEBUG=1/**/*',
      '.output',
      'docs/_nuxt/*',
    ],
  },
  {
    files: ['pages/*.vue'],
    rules: {
      'vue/multi-word-component-names': 0,
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
    },
  },
  {
    files: ['**/*.vue', '**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        parser: {
          ts: tseslint.parser,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
  },
)
