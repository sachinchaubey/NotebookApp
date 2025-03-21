const connectToMongo = require('./db')
const express = require('express')

connectToMongo()

const app = express()
const port = 3000

app.use(express.json()) //this is a middleware that use for using req.body (without this req.body can't be useful)
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})