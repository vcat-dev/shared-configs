import configs from "./eslint.config.mjs"
import tseslint from "typescript-eslint"

export default tseslint.config(
	{
		ignores: ["dist", "*.config.js", "*.config.ts", "*.config.mjs", "*.setup.ts", "src/drizzle/**/*.ts", "src/overrides/**/*.ts", "coverage/**"]
	},
	configs
)
