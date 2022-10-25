// 数据库
const { Sequelize, DataTypes } = require('sequelize')

// 创建链接
function createDB() {
  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/db.sqlite',
  })

  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
    },
  })
  
  sequelize.sync().then(() => {
    User.create({ name: 'admin', age: 29 }).then(user => {
      console.log('创建成功')
    }).catch(err => console.error(err))

    User.findAll().then(users => console.log(users.length))
  })

  
  return sequelize
}

module.exports = {
  createDB
}


