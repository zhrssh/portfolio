
# version_settings() enforces a minimum Tilt version
# https://docs.tilt.dev/api.html#api.version_settings
version_settings(constraint='>=0.22.2')

docker_build(
    'portfolio/webclient',
    context='./src/webclient/',
    ignore=['./src/webclient/dist/'],
    live_update=[
        fall_back_on('./src/webclient/vite.config.ts'),
        sync('./src/webclient/', '/app/'),
        run(
            'bun install',
            trigger=['./src/webclient/package.json', './src/webclient/bun.lock']
        )
    ]
)

k8s_yaml(kustomize('./kustomize/dev/'))

k8s_resource(
    'webclient',
    port_forwards='8080:80', # nginx port
    labels=['webclient']
)
