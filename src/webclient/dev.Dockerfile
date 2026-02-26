FROM oven/bun:1

WORKDIR /app

# Install requirements
COPY package*.json ./
COPY bun.lock ./
RUN bun install

# Copy source code
COPY . .

# Run
EXPOSE 5173
ENTRYPOINT [ "bun", "--bun", "run", "dev", "--host", "0.0.0.0" ]
