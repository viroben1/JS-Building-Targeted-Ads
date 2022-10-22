const express = require('express')
const app = express()
const liveServer = require('live-server')

async function main() {

    app.listen(3005, () => {
        liveServer.start({
            port: 3004,
            logLevel: 0,
            root: './public'
        })
    })
}

main()