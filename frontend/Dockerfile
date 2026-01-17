# ---------- Stage 1: Build ----------
FROM node:18-alpine AS build

WORKDIR /app

# Copy only dependency files first (better caching)
COPY package.json package-lock.json ./

# Install exact dependencies (clean & reproducible)
RUN npm ci

# Copy source code
COPY . .

# Build production assets
RUN npm run build

# ---------- Stage 2: Runtime ----------
FROM nginx:1.25-alpine

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files
COPY --from=build /app/build /usr/share/nginx/html

# Expose HTTP
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
