const express = require('express')
const app = express()
const port = 8080

app.use(express.static(__dirname + '/public'))

app.listen(port, () => {
  console.log(`Server web listening on port ${port}`)
})