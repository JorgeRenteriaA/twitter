const UserService = require('./../services/UserService')

class UserView{

    static createUser(payload){
        var objMessage = {}
       
        if (payload===null){ 
            return objMessage = {error:"payload no existe"}
        }
        else if(typeof payload.username !== 'string' || typeof payload.name !=='string' || typeof payload.id !=='number'){
            return objMessage = {error:"necesitan tener un valor válido"}
        }
        else if(payload.id === undefined || payload.username  === undefined || payload.name  === undefined){
            return objMessage = {error:"necesitan tener un valor válido"}
        }
        else {        
            return UserService.create(payload.id, payload.username, payload.name)
        }
    }
}

module.exports = UserView