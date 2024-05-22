#Build stage
FROM node:20-alpine AS development

WORKDIR /app

COPY package*.json .

RUN npm install
RUN npm update

COPY . .

# RUN npm run build
CMD ["npm", "run", "build"]

#Build stage
FROM node:20-alpine AS production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json .

RUN npm ci --only=production

COPY --from=development /app/dist ./dist

CMD ["node", "dist/index.js"]