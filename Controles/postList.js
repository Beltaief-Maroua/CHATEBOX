const {connection} = require('..//ConfigurationDataBase/config')
module.exports = {
    addpost:((req,res)=>{
        console.log(req.body)
        const query=`INSERT INTO list(firstName,lastName,image,createAt)VALUES("${req.body.firstName}","${req.body.lastName}","${req.body.image}","${req.body.createAt}");`
        connection.query(query,(error,result)=>{
            error ? res.status(500).send(error) : res.status(200).send("post has been created")
        })
    })
}