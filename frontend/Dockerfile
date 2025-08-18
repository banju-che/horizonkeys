# Frontend Dockerfile
FROM node:20

WORKDIR /app

# Copy package.json first for better caching
COPY package.json package-lock.json ./
RUN npm install

# Copy rest of frontend files
COPY . /app

EXPOSE 3000

CMD ["npm", "start"]
