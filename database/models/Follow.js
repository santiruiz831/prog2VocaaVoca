module.exports= (sequelize,dataTypes)=>{

    const alias = 'Follow';

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }
    }

    const config = {
        tableName:'follow',
        timestamps: false,
        underscored: true,
    }

    const Follow = sequelize.define(alias,cols,config)
    
    Follow.associate = function(models) {
        Follow.belongsTo(models.User, {
            as: 'follower',
            foreignKey: 'follower_id'
        });
        Follow.belongsTo(models.User, {
            as: 'following',
            foreignKey: 'following_id'
        });
    };

    return Follow
}