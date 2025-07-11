# Instalando o Jest

```sh
npm i jest @types/jest ts-jest tsx ts-node -D
```

# Configurando arquivo `jest.config.ts`

```ts
    import type { Config } from 'jest'

    const config: Config ={
        bail: true,
        preset: 'ts-jest',
        testEnvironment: 'node',

        // outras configs
    }

    export default config
```

# Execução dos testes

## Arquivo específico

```sh
npx jest src/sum.test.ts
npx jest src/subtraction.test.ts
```

## Mais de um arquivo

```sh
npx jest
```