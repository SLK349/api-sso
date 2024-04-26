FROM node:21

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install -g nodemon

COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]
