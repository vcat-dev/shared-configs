import configs from "./eslint.config.mjs"

export default [
	{
		ignores: ["**/dist/*", "**/*.config.js", "**/*.config.ts", "**/*.config.mjs", "**/*.setup.ts", "src/drizzle/**/*.ts", "src/overrides/**/*.ts", "**/coverage/*"]
	},
	...configs
]
