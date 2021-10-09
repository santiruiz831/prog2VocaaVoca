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
        }
    }
let config = {
    tableName: "comments",
    timestamps: true,
    underscored: true
}

const Comment = sequelize.define(alias, cols, config)

return Comment

}