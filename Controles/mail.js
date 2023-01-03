const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service : "beltaief.maroua@gmail.com", 
    port : 587,
    host : 'smtp.gmail.com',
    secure : false,
    auth : {
        user : process.env.EMAIL,
        pass : process.env.PASSWORD
    },
    tls : {
        rejectUnauthorized: false,
    }
});

transporter.verify(function(error, success){
    if (error){
        console.log(error,'server error');
    } else {
        console.log('server is ready to take our Messages');
    }
});

const nodmail = async(req, res, next) => {
    var FullName = req.body.FullName
    var Email = req.body.Email
    var Subject = req.body.Subject
    var Message = req.body.Message
    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div class="container">
          <h2>${FullName}</h2>
          <p>${Email}</p>
          <h2>${Subject}</h2>
          <p>${Message}</p>
        </div>
    </body>
    </html>`
    var mail = {
        from : req.body.Email,
        to : "beltaief.maroua@gmail.com",
        Subject : Subject,
        text : Message,
        html : html

    }

    transporter.sendMail(mail, (err,data) =>{
        if (err) {
            res.json({
                status : 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
}

module.exports = {
    nodmail,
};