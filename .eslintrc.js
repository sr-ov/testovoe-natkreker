module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		'plugin:@typescript-eslint/recommended',
		'@nuxtjs/eslint-config-typescript',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		'no-tabs': 0,
		indent: 0,
		'comma-dangle': 0,
		'vue/html-self-closing': 0,
		'vue/html-indent': 0,
		'vue/singleline-html-element-content-newline': 0,
		'vue/multi-word-component-names': 0,
		curly: ['error', 'multi-line'],
		'@typescript-eslint/no-unused-vars': 1,
		'@typescript-eslint/no-empty-interface': 0,
		'func-call-spacing': 0,
		'space-before-function-paren': 0,
		'arrow-parens': 0,
		'vue/attributes-order': 0,
	},
}
