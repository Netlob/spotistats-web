
const SERVER_PROTOCOL = 'https'
const SERVER_HOSTNAME = 'pino.spotistats.app'
// const SERVER_PORT = 8081

const SERVER = {
    hostname: SERVER_HOSTNAME,
    // port: SERVER_PORT,
    protocol: SERVER_PROTOCOL,
    url: `${SERVER_PROTOCOL}://${SERVER_HOSTNAME}/api/v1`
}

const config = {
    server: SERVER
}

export default config