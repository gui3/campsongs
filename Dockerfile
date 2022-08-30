# syntax=docker/dockerfile:1
# helps parser of older or newer versions

FROM node:12.18.1
# "inherit"

ENV NODE_ENV=production

WORKDIR /app
# allows relative paths

COPY ["package.json", "package-lock.json*", "./"]
# [src, src..., dest]

RUN npm install --production

COPY . .
# not recursive

CMD ["node", "server.js"]