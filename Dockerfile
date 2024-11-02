#Step 1: Build the React application
FROM docker-upstream.apple.com/node:22 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install --registry https://npm.apple.com

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application for production
RUN npm run build

# Step 2: Serve the build with Nginx
FROM docker-upstream.apple.com/nginx:alpine

# Copy the React build from the previous stage to the Nginx HTML folder
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Start Nginx when the container is started
CMD ["nginx", "-g", "daemon off;"]
