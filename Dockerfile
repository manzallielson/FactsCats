FROM node:16.13.0
LABEL version="1.0"
RUN mkdir /factsCats
WORKDIR /factsCats
COPY package.json yarn.lock ./
RUN yarn && yarn cache clean
COPY . .