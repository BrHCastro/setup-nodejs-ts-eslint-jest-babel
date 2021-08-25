



## INICIANDO...

```
    git init

    yarn init -y

    yarn tsc --init
```

### Documentos criados...
- package.json
- tscongig.json

## ADICIONANDO DEP TS-NODE-DEV.
> Compila TS automaticamente durante o desenvolvimento (muito + produtivo 🔥🔥)
```
    yarn add ts-node-dev -D
```
### Adicionando no package.json...
```json
    //package.json

    "scripts": {
        "dev": "ts-node-dev src/server.ts"
    },
```
> Para melhorar ainda mais, adicionarei algumas flags 
>* respawn: restartar/não deixar nenhum processo vivo
>* transpile-only: não procurar erros na tipagem do código, executar direto.
>* ignore-watch: passei a pasta node_modules, assim não sera observado alterações nesta pasta.

```json
    //package.json

    "scripts": {
        "dev": "ts-node-dev --respawn --transpile-only --ignore-watch node-modules src/server.ts"
    },
```

## CONFIGURAÇÃO DO TSCONFIG.JSON.
```json
    //tsconfig.json

    {
        "compilerOptions": {
            "target": "es2017",
            "module": "commonjs",
            "lib": ["es6"],
            "allowJs": true,
            "outDir": "./dist",
            "rootDir": "./src",
            "removeComments": true,
            "typeRoots": [
            "./node_modules/@types",
            "./src/@types"
            ],
            "esModuleInterop": true,
            "resolveJsonModule": true,
            "experimentalDecorators": true,
            "emitDecoratorMetadata": true,
            "skipLibCheck": true,
            "forceConsistentCasingInFileNames": true
        }
    }
```
## CONFIGURANDO OS PATHS:
> Basicamente atalhos dos caminhos para chegar em nossas pastas. Integra muito bem com o auto import.

```json
    //tsconfig.json

    "baseUrl": ".",
    "paths": {
      "@controllers/*": ["./src/controllers/*"],
      "@models/*": ["./src/models/*"]
    }
```
> Para que o ts-node-dev entenda essa configuração dos paths é necessário a seguinte dependencia.
```
    yarn add tsconfig-paths -D
```
> Adicionar mais a flag -r tsconfig-paths/register 💪
```json
    //package.json

    "scripts": {
        "dev": "ts-node-dev -r tsconfig-paths/register --respawn --transpile-only --ignore-watch node-modules src/server.ts"
    }
```


