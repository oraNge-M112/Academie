const express = require('express')
const { response } = require('express')

// configuram serverul si portul
const server = express()
const port = 3000

const message = { message: 'hi there fellow human'}

// configuram rutele
server.get('/hello', (request, response) => response.send(message))

// pornim serverul
server.listen(port, () =>
	console.log(`Server started on http://localhost:${port}`)
)
