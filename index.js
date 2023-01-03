const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const cookieParser = require('cookie-parser')
const {routerPost}=require('./Router/routerList')
const {routerGet}=require('./Router/routerGet')
const {routerUpDate}=require('./Router/routerUpDate')
const {routerDelete}=require('./Router/routerDelete')
const {routerMail}=require('./Router/routerMail')
const {smsraouter}=require('./Router/smsrouter')
app.use(
    cors({
        origin:'http://localhost:19006',
        credentials:false,
        optionsSuccessStatus:200,
    })
)
app.use(express.json())
app.use('/',smsraouter)
app.use('/',routerGet)
app.use('/',routerUpDate)
app.use('/',routerPost)
app.use('/',routerDelete)
app.use('/',routerMail)

app.listen(port, ()=>{
    console.log('http://localhost:'+port)
})