FROM node:14-alpine

RUN apk upgrade --update && \
    apk --no-cache --update add \
    icu-dev autoconf make g++ gcc bash git zip unzip vim


RUN npm i -g nodemon

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD ["nodemon", "bin/www"]