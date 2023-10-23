FROM node:buster-slim

WORKDIR /app

COPY . .

RUN npm install node -y 

EXPOSE 5000

CMD ["node", "app.js"]

