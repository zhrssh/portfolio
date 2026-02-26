#!/bin/bash
set -euo pipefail

CONTEXT=".."
WEBCLIENT_DIR="$CONTEXT/src/webclient"

if [[ -f $WEBCLIENT_DIR/$1 ]]; then
    echo "Found $1 in webclient."
fi

if [[ -d $WEBCLIENT_DIR ]] && command -v docker &>/dev/null; then
    echo "Building Dockerfile at $WEBCLIENT_DIR"
    cd $WEBCLIENT_DIR
    docker build . -t portfolio/webclient -f $1
fi
