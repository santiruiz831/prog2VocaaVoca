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
        },
        created_at:{
            type: dataTypes.DATE
        },
        updated_at:{
            type: dataTypes.DATE
        }

    }
const config = {
    tableName: "users",
    timestamps: true,
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
    User.hasMany(models.Follow, {
        as: 'followers',
        foreignKey: 'follower_id'
    });
    User.hasMany(models.Follow, {
        as: 'following',
        foreignKey: 'following_id'
    });
}
return User

}