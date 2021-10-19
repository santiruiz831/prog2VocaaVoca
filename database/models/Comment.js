module.exports = function(sequelize, dataTypes){
    let alias = "Comment"
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        user_id:{
            type: dataTypes.INTEGER
        },
        post_id:{
            type: dataTypes.INTEGER
        },
        content:{
            type: dataTypes.STRING
        },
        created_at:{
            type: dataTypes.DATE
        },
        updated_at:{
            type: dataTypes.DATE
        }
    }
    
let config = {
    tableName: "comments",
    timestamps: true,
    underscored: true
}

const Comment = sequelize.define(alias, cols, config)

Comment.associate = function(models){
    Comment.belongsTo(models.User,{
        as: 'user', 
        foreignKey: 'user_id'
    })
    Comment.belongsTo(models.Post,{
        as: 'post', 
        foreignKey: 'post_id'
    })
}
return Comment

}