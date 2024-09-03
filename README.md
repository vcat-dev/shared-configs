# Shared Configs

Make sure that `@piondev/shared-configs` is correctly installed in your project.

```sh
npm install --save-dev @piondev/shared-configs
# or
yarn add -D @piondev/shared-configs
```

## Biome

Create a `biome.json` file to look like the following snippet:

```json
{
  "extends": "@piondev/shared-configs/biome"
}
```

Now, run Biome in your project:

```sh
npx biome check --write
```

## ESLint

Create a `eslint.config.mjs` file to look like the following snippet:

```js
import config from "@piondev/shared-configs/eslint"

export default [
  ...config
  // rest of your config
]
```

## Prettier

Create a `prettier.config.mjs` file to look like the following snippet:

```js
import config from "@piondev/shared-configs/prettier"

export default {
  ...config
  // rest of your config
}
```
