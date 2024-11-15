# Use an official Node.js image to build the app
FROM node:16 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server to serve the built app
FROM nginx:alpine

# Copy the built app to the NGINX html directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy the custom NGINX configuration and health check file
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/health.html /usr/share/nginx/html/health.html

# Expose the port NGINX listens on
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
