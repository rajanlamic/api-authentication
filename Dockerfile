FROM node:12.8.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 4000

RUN yarn global add nodemon ts-node-dev

CMD [ "yarn", "dev" ]
