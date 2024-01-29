module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true
	},
	extends: ['next'],

	// 코드 정리 플러그인 추가
	plugins: ['prettier'],
	globals: {
		'daum': false
	},
	rules: {
		'prettier/prettier': [
			'error',
			// 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
			// https://prettier.io/docs/en/options.html
			{
				singleQuote: true,
				quoteProps: 'preserve',
				semi: false,
				useTabs: true,
				tabWidth: 4,
				trailingComma: 'none',
				printWidth: 200,
				bracketSpacing: true,
				endOfLine: 'auto',
				arrowParens: 'avoid'
			}
		]
	}
}
