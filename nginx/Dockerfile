# Stage 1: Build React
FROM node:20 AS frontend
WORKDIR /app
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend ./
RUN npm run build

# Stage 2: Nginx
FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/default.conf /etc/nginx/conf.d/
COPY --from=frontend /app/dist /usr/share/nginx/html
RUN mkdir -p /vol/static /vol/media
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
