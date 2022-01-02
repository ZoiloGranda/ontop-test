const express = require('express')
var path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '/dist/ontop-test/')))

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server running at ${port}/`)
})