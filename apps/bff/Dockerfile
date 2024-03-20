# syntax = docker/dockerfile:1.2

ARG NODE_VERSION=18.19
ARG PORT=3000
ARG FLAVOR=alpine

FROM node:${NODE_VERSION}-${FLAVOR} as base

ARG UID=1005
ARG GID=1005
ARG USER=app

ENV PORT=$PORT
EXPOSE $PORT

ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini-static /tini
RUN chmod +x /tini

RUN addgroup -S -g ${GID} ${USER} && adduser -S --uid ${UID} ${USER} -G ${USER}
RUN mkdir /app && chown -R $USER:$USER /app
USER $USER
WORKDIR /app

# dev deps
FROM node:${NODE_VERSION}-${FLAVOR} as builder
ENV NODE_ENV=development
WORKDIR /app
COPY --chown=$USER:$USER package*.json ./
COPY --chown=app:app . ./
RUN npm install
RUN npm run build

FROM builder as dev
COPY --chown=app:app --from=builder /app/node_modules /app/node_modules
CMD ["npm", "run", "start:dev"]

FROM node:${NODE_VERSION}-${FLAVOR} as prod
COPY --chown=app:app --from=builder /app/node_modules /app/node_modules
COPY --chown=app:app --from=builder /app/dist /app/dist
COPY --from=base /tini /tini
ENTRYPOINT ["/tini", "--"]
CMD ["node", "dist/src/main.js"]
