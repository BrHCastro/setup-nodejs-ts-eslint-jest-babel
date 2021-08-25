



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
    "scripts": {
        "dev": "ts-node-dev src/server.ts"
    },
```
> Para melhorar ainda mais, adicionarei algumas flags 
>* respawn: restartar/não deixar nenhum processo vivo
>* transpile-only: não procurar erros na tipagem do código, executar direto.
>* ignore-watch: passei a pasta node_modules, assim não sera observado alterações nesta pasta.

```json
    "scripts": {
        "dev": "ts-node-dev --respawn --transpile-only --ignore-watch node-modules src/server.ts"
    },
```


