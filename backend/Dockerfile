# Dockerfile for Express backend
FROM node:18

WORKDIR /app
COPY ./ ./
RUN npm install

EXPOSE 5000
CMD ["node", "src/index.js"]