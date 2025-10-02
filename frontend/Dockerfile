# Frontend Dockerfile (Vite - Development)
FROM node:20-slim

WORKDIR /app

# Copy dependency files first for caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
