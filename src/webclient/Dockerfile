# Use multi-stage builds to optimize the final image size
# Stage 1: Install dependencies
FROM oven/bun:1 AS deps

WORKDIR /app

# Install production dependencies
COPY package.json ./
COPY bun.lock ./

RUN bun install --frozen-lockfile --production

# Stage 2: Build the application
FROM oven/bun:1 AS builder

WORKDIR /app

# Install dependencies
COPY package.json ./
COPY bun.lock ./
RUN bun install --frozen-lockfile

# Copy source code
COPY ./ ./

# Build
RUN bun --bun run build

# Stage 3: Create the final image
FROM oven/bun:1 AS runner

WORKDIR /app

# Create non-root user
RUN groupadd -g 1001 appgroup && \
    useradd -u 1001 -g appgroup appuser

# Copy built application and production dependencies
COPY --from=deps /app/node_modules /app/node_modules
COPY --from=builder /app/.output /app/.output

# Set ownership of the application files to the non-root user
RUN chown -R appuser:appgroup /app

# Run server
USER appuser

# Expose the port the server will run on
EXPOSE 3000

# Environments
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

CMD ["bun", "run", ".output/server/index.mjs"]
