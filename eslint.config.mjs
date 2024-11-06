import eslint from "@eslint/js"
import tseslint from "typescript-eslint"

export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended, {
	languageOptions: {
		parser: tseslint.parser
	},
	plugins: {
		"@typescript-eslint": tseslint.plugin
	},
	rules: {
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				argsIgnorePattern: "^_.*",
				varsIgnorePattern: "^_.*",
				caughtErrorsIgnorePattern: "^_.*"
			}
		],
		"no-console": ["error", { allow: ["debug", "info", "warn", "error"] }],
		"no-empty": "off",
		"no-case-declarations": "off"
	}
})
