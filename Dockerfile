FROM node:14-alpine

WORKDIR /api

COPY . .

RUN npm install

CMD ["npm","start"]