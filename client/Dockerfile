FROM node:10

WORKDIR /Users/Michal Zajic/workspaces/nba-app/client/

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 3000

CMD [ "npm","start"]

