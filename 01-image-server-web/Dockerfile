FROM node:21

WORKDIR /app

COPY src/ src/
COPY package.json .
COPY package-lock.json .

RUN npm ci --no-fund --no-audit

CMD ["node", "src/server.ts"]

