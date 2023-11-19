const express = require('express');
const {getClientIp} = require("request-ip");
const app = express();
const fs = require('fs')
const {EOL} = require("os");

app.get('/', function(req, res) {
    const clientIp = getClientIp(req)

    try {
        fs.appendFileSync('/data/ips.txt', clientIp + EOL);
        console.log(`Saved ${clientIp} to /data/ips.txt`)
    } catch (e) {
        console.log('Could not save ip', e)
    }

    res.send(clientIp)
});

app.listen(4999, function() {
    console.log('Web application is listening on port 4999');
});
