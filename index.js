require('express-async-errors')
const express = require('express')
const http = require('http')
const graceful = require('http-graceful-shutdown')
const axios = require('axios')
const cors = require('cors')
const logger = require('morgan')

const app = express()
const server = http.createServer(app)

const port = process.env.PORT || 3000

app.use(cors())
app.use(logger('dev'))

app.get('/', async (req, res) => {
	return res.status(200).json({ message: 'API is Working Fine' })
})

app.get('/posts', async (req, res) => {
	const results = await axios.get('https://jsonplaceholder.typicode.com/posts')
	return res.status(200).json({ data: results.data })
})

app.get('/comments', async (req, res) => {
	const results = await axios.get('https://jsonplaceholder.typicode.com/comments')
	return res.status(200).json({ data: results.data })
})

app.get('/albums', async (req, res) => {
	const results = await axios.get('https://jsonplaceholder.typicode.com/albums')
	return res.status(200).json({ data: results.data })
})

app.get('/photos', async (req, res) => {
	const results = await axios.get('https://jsonplaceholder.typicode.com/photos')
	return res.status(200).json({ data: results.data })
})

app.get('/todos', async (req, res) => {
	const results = await axios.get('https://jsonplaceholder.typicode.com/todos')
	return res.status(200).json({ data: results.data })
})

app.get('/users', async (req, res) => {
	const results = await axios.get('https://jsonplaceholder.typicode.com/users')
	return res.status(200).json({ data: results.data })
})

const serverGraceful = server.listen(port, () => console.info('Server is running on port ' + server.address().port))

graceful(serverGraceful, { forceExit: false })
