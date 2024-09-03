# Shared Configs

## Biome

Make sure that `@piondev/shared-configs` is correctly installed in your project. 

```sh
npm install --save-dev @piondev/shared-configs
# or
yarn add -D @piondev/shared-configs
```

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
