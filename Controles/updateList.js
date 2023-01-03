const {connection} = require('../ConfigurationDataBase/config')
module.exports = {
    updatepost:((req,res)=>{
        console.log(req.body)
        const query = `UPDATE list SET firstName="${req.body.firstName}",lastName="${req.body.lastName}" WHERE id="${req.params.id}"`
        connection.query(query,(error,result)=>{
            error ? res.status(500).send(error) : res.status(200).send(result)
        })
    })
}