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
        phone:{
            type: dataTypes.INTEGER
        }

    }
let config = {
    tableName: "users",
    timestamps: false,
    underscored: true
}

const User = sequelize.define(alias, cols, config)


User.associate = function(models){
    User.hasMany(models.Comment,{
        as: 'comments', 
        foreignKey: 'user_id'
    })
    User.hasMany(models.Post,{
        as: 'posts', 
        foreignKey: 'user_id'
    })
}
return User

}