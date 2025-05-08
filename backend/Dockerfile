# # Dockerfile for server

# # Build server
# FROM node:18-alpine AS base

# # Working directory be app
# WORKDIR /app

# #Copy package.json to the working directory
# COPY package.json package-lock.json* ./

# #Install dependencies
# RUN npm install


# #copy the local files to the working directory
# COPY . .

# EXPOSE 5000

# CMD ["npm", "start"]

# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files separately to improve build cache efficiency
COPY package.json package-lock.json* ./


# Install dependencies (production & development)
RUN npm install


# Copy the rest of the application files
COPY . .

# Fix permissions: Change ownership to the non-root user
RUN chown -R node:node /app && chmod -R 755 /app

# Switch to non-root user
USER node

# Expose the application port
EXPOSE 5000


# Start the application
CMD ["npm","start"]