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
