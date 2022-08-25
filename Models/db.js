const Sequelize = require('sequelize')

const sequelize = new Sequelize("usuario","root","211426Pedro@",{

    host:'localhost',
    dialect:'mysql' 
})

sequelize.authenticate()
.then(function(){
    console.log(" Banco de Dados cadastrado com Sucesso")
}).catch(function(){
    console.log("erro")
})

module.exports = sequelize;