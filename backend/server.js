require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8000;
const passport = require('passport')

//Middleware 
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// passport Middleware
app.use(passport.initialize())
// importing passport file into server define middleware above routes
require('./config/passport')(passport)
// home rout for sever
app.get('/', (req, res) =>{
    res.status(200).json({message: 'Smile, you are being watch by the Backend Team'})
})

app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`)
})