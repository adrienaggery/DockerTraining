# TP 02 Image pour un serveur web

## Pré-requis

Installer Node et NPM
```shell
sudo apt update
sudo apt install nodejs
sudo apt install npm
node -v
npm -v
```

Installer les dependances NPM

```shell
npm i
```


## Lancer le serveur en local
```shell
npm run start
```
ou
```shell
node dist/server.js
```

## Objectif

Ecrire un Dockerfile qui, apres être buildé lance le server web node.

Utilisation des instruction `FROM`, `WORKDIR`, `COPY`, `RUN` et `CMD`

Lancer le conteneur en précisant un volume à monter pour que le serveur web puisse écrire ses logs dans /data