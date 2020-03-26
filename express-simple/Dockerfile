FROM node:12 AS Builder
WORKDIR /srv

COPY [".", ""]

# there are some problems with audit and 503 response code
# relevant issues: https://github.com/yarnpkg/yarn/issues/6929 and https://github.com/yarnpkg/yarn/pull/7281
RUN yarn install --non-interactive && \
  yarn audit --groups dependencies && \
  yarn lint && \
  yarn format && \
  yarn build

FROM node:12-slim

EXPOSE 3000
ENV NODE_ENV production
WORKDIR /srv

COPY --from=Builder ["srv/dist", "./dist"]
COPY ["./package.json", "yarn.lock", "./"]

RUN yarn install --non-interactive

CMD ["yarn", "prod"]
