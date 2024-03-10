FROM node:18.19.1-alpine

WORKDIR /usr/src/node

COPY ./package-lock.json ./package-lock.json
COPY ./*.* ./

RUN npm i

COPY . .

CMD [ "npm" , "run" , "start"]