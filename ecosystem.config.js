module.exports = {
  apps: [{
    name: 'elyoservices',
    script: 'npm',
    args: 'start',
    cwd: '/root/dev/client-projects/elyo-next',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
