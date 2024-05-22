FROM node:20-alpine AS development
 
WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .
 
EXPOSE 5173

#CMD ["npm", "run", "dev"]

FROM node:20-alpine AS production

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "preview"]