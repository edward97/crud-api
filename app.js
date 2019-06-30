const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// const indexRouter = require('./routes/index.route')
const usersRouter = require('./routes/users.route')

app.use('/users', usersRouter)

app.listen(port, () => console.log(`app listening on port ${port}`))