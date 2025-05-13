module.exports = {
  apps: [
    {
      name: 'witnet-website',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env: {
        PORT: 3000,
        HOST: '0.0.0.0',
        NODE_ENV: 'production',
      },
    },
  ],
}
