const {connection} = require('../ConfigurationDataBase/config')
module.exports = {
    deletepost : ((req,res)=>{
        const query = `DELETE FROM list WHERE id="${req.params.id}" `
        connection.query(query,(error,result)=>{
            error ? res.status(500).send(error) : res.status(200).send(console.log('post has been deleted'))
        })
    })
}