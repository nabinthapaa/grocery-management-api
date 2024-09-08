FROM node:current-alpine3.19

WORKDIR /app

ENV TZ="Asia/Kathmandu"

COPY package*.json .

RUN  npm i 

COPY  . .

CMD [ "npm" , "start" ]
