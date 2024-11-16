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
				allowShortCircuit: true,
				argsIgnorePattern: "^_.*",
				varsIgnorePattern: "^_.*",
				caughtErrorsIgnorePattern: "^_.*"
			}
		],
		"no-console": ["error", { allow: ["debug", "error", "info", "trace", "warn"] }],
		"no-empty": "off",
		"no-case-declarations": "off"
	}
})
