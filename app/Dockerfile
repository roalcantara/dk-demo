FROM node:16.18.0-alpine as base

WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .

FROM base as production

RUN apk add \
  --update --no-cache \
  xsel

ENV NODE_PATH=./dist

RUN npm run build && npm install -g serve@14.0.1