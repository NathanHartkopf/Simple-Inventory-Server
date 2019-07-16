import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
const port = 80

import itemRoutes from './api/routes/item'

app.use(bodyParser.json())
app.use(cors())

itemRoutes(app)

app.listen(port)