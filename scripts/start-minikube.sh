#!/bin/bash
set -euo pipefail

if minikube status &>/dev/null; then
    echo "Minikube is running."
else
    echo "Minikube is not running."
    echo "Attempting to start minikube..."
    minikube start --insecure-registry true

    echo "Running minikube docker-env..."
    eval $(minikube docker-env)
fi
