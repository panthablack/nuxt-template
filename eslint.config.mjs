import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/multi-word-component-names': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
})
