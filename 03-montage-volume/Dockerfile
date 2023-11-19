FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
COPY server.js ./

CMD ["npm","start"]
