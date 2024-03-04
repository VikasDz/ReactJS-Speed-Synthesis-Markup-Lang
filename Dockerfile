FROM node:18-alpine

WORKDIR  /app

COPY package*.json ./

RUN npm install

RUN npm install -g npm@10.5.0

COPY . .


RUN npm run build

EXPOSE 5173

CMD ["npm", "start"]