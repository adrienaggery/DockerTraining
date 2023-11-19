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
node src/server.ts
```

## Objectif

Ecrire un Dockerfile qui, apres être buildé lance le server web node.

Utilisation des instruction `FROM`, `WORKDIR`, `COPY`, `RUN` et `CMD`

## Rappel des commandes de base docker

Lister les images du registry local: `docker images`

Builder une image a partir d'un Dockerfile: `docker build . -t <nom>:<version>`

Lancer un conteneur: `docker run -it --name <nom_conteneur> <nom_image>`

Lister les conteneurs: `docker ps`