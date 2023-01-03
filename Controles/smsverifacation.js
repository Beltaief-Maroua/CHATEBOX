const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
module.exports={
    sendSms:((req,res)=>{
        client.messages
        .create({
           body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
           from: '+12518422742',
           to: req.body.SMS
         })
        .then((message)=>{
            console.log(message,'hey')
        }).catch((err)=>{
            console.log(err,'hey')
        })
    })
}
