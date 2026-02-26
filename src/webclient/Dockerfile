FROM oven/bun:1 AS builder

WORKDIR /app

# Install requirements
COPY package.json ./
COPY bun.lock ./
RUN bun install

# Copy source code
COPY . .

# Build
RUN bun --bun run build

# Run nginx as web server
FROM nginx:1
COPY --from=builder /app/dist /usr/share/nginx/html 
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
