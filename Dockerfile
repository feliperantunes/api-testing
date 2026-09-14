FROM node:20-alpine

WORKDIR /app

RUN npm install -g newman

COPY pokeapi.postman_collection.json .

CMD ["newman", "run", "pokeapi.postman_collection.json"]
