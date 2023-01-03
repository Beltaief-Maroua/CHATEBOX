const {connection} = require('..//ConfigurationDataBase/config')
module.exports = {
    getpost:((req,res)=>{
        const query = "select * from list"
        connection.query(query,(error,result)=>{
            error ? res.status(500).send(error) : res.status(200).send(result)
        })
    })
}