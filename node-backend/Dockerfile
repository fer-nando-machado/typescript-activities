FROM node:20-alpine
WORKDIR /app
COPY ./types ./types
COPY ./node-backend ./node-backend
WORKDIR /app/node-backend
RUN npm install
RUN npm run build
CMD ["npm", "run", "serve"]
