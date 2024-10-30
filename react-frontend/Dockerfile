FROM node:20-alpine
WORKDIR /app
COPY ./types ./types
COPY ./react-frontend ./react-frontend
WORKDIR /app/react-frontend
RUN npm install
RUN npm run build
CMD ["npm", "run", "serve"]
