FROM node:10

WORKDIR /Users/Michal Zajic/workspaces/nba-app/
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "start"]