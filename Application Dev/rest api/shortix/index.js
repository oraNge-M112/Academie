const express = require('express')
const redis = require('redis')

// configuram serverul si portul
const server = express()
const port = 3000

// client de redis
const client = redis.createClient()

// decodeaza body-ul requestului si il transforma in JSON
server.use(express.json())

function shortify(request, response) {
	const longUri = request.body.longUri
	// generam shortUri
	const shortUriId = Math.random().toString(16).substr(2, 8)
	const shortUri = `http://localhost:${port}/uris/${shortUriId}`
	// salvam legatura intre shortUri si longUri in redis
	client.set(shortUri, longUri)
	// trimitem raspuns
	response.send({ shortUri })
}

function longify(request, response) {
	const shortUriId = request.params.shortUriId
	const shortUri = `http://localhost:${port}/uris/${shortUriId}`
	const longUri = client.get(shortUri, (error, longUri) => response.send({ longUri }))
}

server.post('/uris', shortify)
server.get('/uris/:shortUriId', longify)

// pornim serverul
server.listen(port, () =>
	console.log(`Server started on http://localhost:${port}`)
)
