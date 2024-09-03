import eslint from "@eslint/js"
import tseslint from "typescript-eslint"

export default tseslint.config(
	{
		ignores: ["dist", "*.config.js", "*.config.ts", "*.config.mjs", "*.setup.ts", "src/drizzle/**/*.ts", "src/overrides/**/*.ts", "coverage/**"]
	},
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		languageOptions: {
			parser: tseslint.parser
		},
		plugins: {
			"@typescript-eslint": tseslint.plugin
		},
		rules: {
			"@typescript-eslint/no-unused-vars": "off",
			"no-empty": "off",
			"no-case-declarations": "off"
		}
	}
)
