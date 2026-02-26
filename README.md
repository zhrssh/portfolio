# My Portfolio

This is the source code of my portfolio found at [URL HERE](#)

---

## Development Setup

### Prerequisites

1. Minikube
2. Docker Engine & Docker CLI
3. Tilt

### Setup Steps

1. Build images:

   `scripts/build-images.sh`

2. Start Minikube:

   `scripts/start-minikube.sh`
   - This will start a local Minikube cluster.
   - **Note:** Stop and delete any running Minikube cluster before executing this script.

3. From the root directory, run:

   `tilt up`
   - If you're developing the react app, it's good to run `bun run dev` along side `tilt up` so that the plugins are still working.
   - The `tilt up` allows you to build the images automatically to be able to see what it's like in production-like environment.

4. For clean up, run:

   `tilt down`
