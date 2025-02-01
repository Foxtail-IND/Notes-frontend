# Use Node.js for building the app
FROM node:14 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build the app (outputs to "dist" instead of "build")
RUN npm run build

# Use Nginx to serve the app
FROM nginx:alpine

# Copy the correct build folder to Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
