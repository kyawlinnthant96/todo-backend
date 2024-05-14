FROM node:20-alpine3.17

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 8080

CMD ["npm", "run", "start:prod"]
