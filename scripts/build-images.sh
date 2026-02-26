#!/bin/bash
set -euo pipefail

NAMESPACE="portfolio"
ROOTDIR=".."
WEBCLIENT_DIR="$ROOTDIR/src/webclient"

if [[ -d $WEBCLIENT_DIR ]] && command -v docker &>/dev/null; then
    echo "Building Dockerfile at $WEBCLIENT_DIR"
    cd $WEBCLIENT_DIR
    docker build . -t $NAMESPACE/webclient
fi
