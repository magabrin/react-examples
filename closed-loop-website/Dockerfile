FROM node:12.2.0-alpine

# set working directory
RUN mkdir /app
WORKDIR /app

# RUN npm install -g yarn

# install and cache app dependencies
COPY package.json /app/package.json

COPY . .

# COPY certs/integration/server.cert /etc/ssl/server.cert

RUN npm install

# EXPOSE 80
EXPOSE 7000

CMD ["npm", "start"]