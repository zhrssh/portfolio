# Copilot instructions for this repository

This file helps Copilot-style agents (and future sessions) understand how to build, run, test, and reason about this repo.

## Where to run commands
- Most project-level commands are executed from the repository root (/home/zheri-pc/Projects/portfolio).
- The web app lives in src/webclient — most JS/TS, build, and test scripts must be run from that directory.

## Build, test, and lint commands
- Build web client: cd src/webclient && bun run build  (or `npm run build`/`pnpm run build` if using those tools)
- Start dev server: cd src/webclient && bun run dev  (Vite on port 3000)
- Preview production build: cd src/webclient && bun run preview
- Run tests (full suite): cd src/webclient && bun run test  (runs vitest)
- Run a single test file or pattern:
  - Using vitest directly: cd src/webclient && npx vitest run path/to/test.spec.ts
  - Or with script filters: cd src/webclient && bun run test -- -t "<test name or pattern>"

- Docker / local k8s flows (root):
  - Build images: scripts/build-images.sh
  - Start minikube (sets docker env): scripts/start-minikube.sh
  - Use Tilt for local cluster + fast rebuilds: tilt up  (requires Tilt, Minikube, Docker)
  - Stop Tilt: tilt down

## High-level architecture
- Monorepo structure (light):
  - /src/webclient — React + Vite + Nitro app built with Bun; UI code, Vite config, tests, and package.json live here.
  - /kustomize — Kubernetes kustomize overlays; kustomize/dev/ holds development manifests used by Tilt.
  - /scripts — helper scripts for image builds and Minikube management.
  - Tiltfile — configures Tilt to docker_build the webclient (portfolio/webclient), kustomize dev overlay, and port-forwards 8080:3000.
- Dev flow: Tilt runs builds and port-forwards the app at localhost:8080 (forwarding to the webclient dev server at port 3000). Bun is used as runtime/installer for the webclient (bun install, bun run dev).
- Docker image name: portfolio/webclient (built from src/webclient/Dockerfile).
- Nitro usage: server output appears in .output/server — start script: `bun --bun run .output/server/index.mjs`.

## Key conventions and repo-specific patterns
- Bun-first scripts: package.json in src/webclient assumes `bun run <script>`; agents should prefer running scripts via bun when present.
- Tilt live_update: Tiltfile uses live_update with fall_back_on and runs `bun install` as part of the live update trigger. Ensure node deps are installed before Docker build steps.
- kustomize dev overlay: k8s manifests are applied via kustomize('./kustomize/dev/'). Changes to kustomize/dev influence what Tilt will deploy.
- Tests: uses vitest. Single-test runs work via npx vitest or passing -t to the test script.
- Ports: Vite dev on 3000, Tilt forwards 8080 -> 3000. In most dev iterations open http://localhost:8080.

## Files and docs to consult
- README.md (root) — quick setup steps for Tilt/Minikube and scripts (already used as authoritative source)
- src/webclient/package.json — scripts and dependencies; first stop for JS/TS workflows.
- Tiltfile and kustomize/dev/* — for local cluster and Kubernetes resources.
- scripts/* — small helper scripts used by the README.

## AI-assistant / tooling files found
- .github/ISSUE_TEMPLATE/* — issue templates present.
- No CLAUDE.md, .cursorrules, AGENTS.md, or other assistant-specific config files were found; nothing to import.

---

If anything here is incorrect or should be expanded (e.g., add single-command examples for CI or add Playwright/Playwright tests), mention it and the instructions will be updated.
