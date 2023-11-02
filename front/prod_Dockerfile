# FROM node:16-alpine as build-stage
FROM node:18.12.1-buster-slim AS build-stage

WORKDIR /app

# Cache dependencies
COPY package.json package-lock.json ./
RUN npm ci --only=cache

# Copy source code
COPY . .

# Build the app
RUN npm run build --production


# FROM nginx:1.21.6-alpine
FROM nginx:1.23.2-alpine

# Copy nginx config
COPY ./ngnx.conf /etc/nginx/conf.d/default.conf

# Copy built app
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]

