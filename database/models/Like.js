module.exports= (sequelize,dataTypes)=>{

    const alias = 'Like';

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }
    }

    const config = {
        tableName:'like',
        timestamps: false,
        underscored: true,
    }

    const Like = sequelize.define(alias,cols,config)
    
    Like.associate = function(models) {
        Like.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        });
        Like.belongsTo(models.Post, {
            as: 'post',
            foreignKey: 'post_id'
        });
    };

    return Like
}