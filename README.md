# Shared Configs

`@piondev/shared-configs`는 JavaScript/TypeScript 프로젝트의 ESLint, Prettier, Biome 설정을 공유하는 목적으로 제작되었습니다.
이를 통해 보다 일관성 있는 코드 스타일을 유지하고 잠재적으로 발생하는 programmatic error를 줄이고자 합니다.

크게 linting과 formatting으로 나뉘어지게 되는데 각 툴은 다음과 같은 것들을 담당하게 됩니다:

- Linting: ESLint, Biome
- Formatting: Prettier, Biome (organizeImports 부분만)

현재 ESLint와 Biome 설정은 기본 규칙에서 많은 부분을 비활성화했습니다. 이는 현재 코드베이스에 급격한 변화를 주어 혼란이나 충돌이 발생하는 것을 방지하기 위함입니다.
추가로 비활성화하거나 활성화할 규칙이 있다면 언제든지 PR을 보내주세요. :)

## Installation

Make sure that `@piondev/shared-configs` is correctly installed in your project.

```sh
npm install --save-dev @piondev/shared-configs
# or
yarn add -D @piondev/shared-configs
```

### Biome

Create a `biome.json` file to look like the following snippet:

```json
{
  "extends": ["@piondev/shared-configs/biome"]
}
```

Now, run Biome in your project:

```sh
npx biome check --write
```

### ESLint

Create a `eslint.config.mjs` file to look like the following snippet:

```js
import config from "@piondev/shared-configs/eslint"

export default [
  ...config
  // rest of your config
]
```

### Prettier

Create a `prettier.config.mjs` file to look like the following snippet:

```js
import config from "@piondev/shared-configs/prettier"

export default {
  ...config
  // rest of your config
}
```

### Scripts

Finally, add the following scripts to your `package.json`:

```json
"scripts": {
  "lint": "yarn lint:eslint && yarn lint:prettier && yarn lint:biome",
  "lint:eslint": "eslint . --fix",
  "lint:prettier": "prettier '**/*.{ts,tsx,js,jsx,json,md,cjs,mjs,mts,yml,yaml}' --write",
  "lint:biome": "yarn biome check --write"
}
```

## ESLint, Prettier, Biome을 함께 사용하는 이유

ESLint, Prettier, Biome을 함께 사용하는 이유는 다음과 같습니다:

1. **다양한 정적 분석 활용**
   - 정적 분석은 많이 할수록 코드 품질 향상에 도움이 됩니다.
   - 각 도구의 장점을 최대한 활용하여 더 철저한 코드 검사가 가능합니다.
1. **도구별 강점 활용**
   - ESLint: 풍부한 플러그인 생태계와 깊이 있는 정적 분석
   - Biome: 빠른 처리 속도
   - Prettier: 일관된 코드 포맷팅 (선택적 사용)
1. **유연한 설정**
   - ESLint: 다양한 규칙과 플러그인 활용
   - Biome: 빠른 import 정리 (organizeImports 기능)
   - Prettier: 필요한 경우 특정 포맷팅 규칙 적용
1. **지속적인 개선**
   - 더 많은 정적 분석 도구를 찾아 적용할 예정입니다.
   - GitHub Actions를 통해 PR 단계에서 자동화된 검사를 구현할 계획입니다.

이러한 접근 방식을 통해 코드 품질을 높이고, 개발 효율성을 향상시키며, 프로젝트의 요구사항에 맞는 최적의 도구 조합을 구성하고자 합니다.

## Samples

- [Lint on Pull Request with GitHub Actions](./samples/lint.yml)
