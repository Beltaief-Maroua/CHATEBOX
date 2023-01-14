const express = require('express')
const app = express()
const port = 3002
const cors = require('cors')
const cookieParser = require('cookie-parser')
const {routerPost}=require('./Router/routerList')
const {routerGet}=require('./Router/routerGet')
const {routerUpDate}=require('./Router/routerUpDate')
const {routerDelete}=require('./Router/routerDelete')
const {routerMail}=require('./Router/routerMail')
const {smsraouter}=require('./Router/smsrouter')
const {routerPaiement}=require('./Router/routerPaiement')


app.use(
    cors({
        origin:'http://localhost:3000',
        credentials:false,
        optionsSuccessStatus:200,
    })
)
app.use(express.json())
app.use('/',routerGet)
app.use('/',routerUpDate)
app.use('/',routerPost)
app.use('/',routerDelete)
app.use('/',routerMail)
app.use('/',smsraouter)
app.use('/',routerPaiement)

app.listen(port, ()=>{
    console.log('http://localhost:'+port)
})