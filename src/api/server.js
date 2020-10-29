const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const router = require('../network/routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(helmet())

// Routing
router(app)

// Errors handlers
// app.use(errorHandler)
// app.use(errorHandler)

const port = 3000
app.listen(port, () => console.log(`API running in http://localhost:${port}`))