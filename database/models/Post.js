module.exports = function(sequelize, dataTypes){
    let alias = "Post"
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        user_id:{
            type: dataTypes.INTEGER
        },
        description:{
            type: dataTypes.STRING
        },
        img:{
            type: dataTypes.STRING
        },
        created_at:{
            type: dataTypes.DATE
        }
        created_at:{
            type: dataTypes.DATE
        }

    }
let config = {
    tableName: "posts",
    timestamps: true,
    underscored: true
}

const Post = sequelize.define(alias, cols, config)

return Post

}