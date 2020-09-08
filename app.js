const express = require('express')
const bodyParse = require('body-parser')
const authRoutes = require('./routes/auth')

const positionRoutes = require('./routes/position')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const passport = require('passport')
const app = express()

mongoose.connect(keys.mongoURI)
    .then(() => console.log("MongoDB connected"))
    .catch(error => console.log(error))

app.use(bodyParse.urlencoded({extended: true}))
app.use(bodyParse.json())

app.use(require('morgan')('dev'))
app.use(require('cors')())

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use('/api/auth', authRoutes)
app.use('/api/position', positionRoutes)

module.exports = app