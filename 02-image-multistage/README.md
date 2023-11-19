# TP 01 Image pour un serveur web

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

Ecrire un Dockerfile en 2 stages qui, compile le projet dans le premier et genere l'image finale dans le deuxieme.

L'image finale ne doit pas contenir les sources du projet, uniquement la compilation.

L'image finale ne doit egalement pas contenir les dependances de dev.

