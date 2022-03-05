FROM node:14-alpine

COPY . /demo

WORKDIR /demo

RUN yarn install

CMD ["yarn", "start"]