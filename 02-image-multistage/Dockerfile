FROM node:20 as ts-compiler

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY src/ src/

RUN  npm ci --no-fund --no-audit

RUN npm run build


FROM node:20

WORKDIR /app

COPY --from=ts-compiler /app/package*.json ./
COPY --from=ts-compiler /app/dist ./dist

RUN npm ci --production --no-fund --no-audit

CMD ["node", "dist/server.js"]