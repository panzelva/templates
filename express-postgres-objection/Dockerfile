FROM node:12 AS builder
WORKDIR /srv

COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --non-interactive

COPY [".", "./"]

RUN yarn install --non-interactive
RUN yarn lint
RUN yarn format
RUN yarn build


FROM node:12-alpine

ENV NODE_ENV production
WORKDIR /srv

COPY --from=builder ["srv/dist", "./"]
COPY ["package.json", "yarn.lock", "./"]

RUN yarn install --production --non-interactive

EXPOSE 4000
CMD ["node", "server.js"]
