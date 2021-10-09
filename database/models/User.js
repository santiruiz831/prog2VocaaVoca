module.exports = function(sequelize, dataTypes){
    let alias = "User"
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        name:{
            type: dataTypes.STRING
        },
        last_name:{
            type: dataTypes.STRING
        },
        mail:{
            type: dataTypes.STRING
        },
        password:{
            type: dataTypes.STRING
        },
        img:{
            type: dataTypes.STRING
        },
        birthday:{
            type: dataTypes.DATE
        },
        age:{
            type: dataTypes.INTEGER
        }

    }
let config = {
    tableName: "users",
    timestamps: false,
    underscored: true
}

const User = sequelize.define(alias, cols, config)

return User

}