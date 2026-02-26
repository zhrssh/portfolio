FROM oven/bun:1 AS builder

WORKDIR /app

# Install requirements
COPY package.json ./
COPY bun.lock ./
RUN bun install

# Copy source code
COPY ./ ./

# Build
RUN bun --bun run build


FROM oven/bun:1 AS runner

WORKDIR /app

# Create non-root user
RUN groupadd -g 1001 appgroup && \
    useradd -u 1001 -g appgroup appuser

COPY --from=builder /app/.output /app/.output
RUN chown -R appuser:appgroup /app

# Run server
USER appuser
EXPOSE 3000
ENTRYPOINT ["bun", "run", ".output/server/index.mjs"]


