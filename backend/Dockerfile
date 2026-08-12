# Use a lightweight Node.js base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy application source code
COPY . .

# Expose the backend network port
EXPOSE 5000

# Command to launch the server
CMD ["node", "server.js"]