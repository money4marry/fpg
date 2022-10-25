// 数据库
const { Sequelize } = require('sequelize')
// const { GridTrade } = require('./db/grid_trade')

// 创建链接
function createDB() {
  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/db.sqlite',
  })

  return sequelize
}
const dbInstance = createDB()
dbInstance
  .authenticate()
  .then(() => {
    console.log('数据库连接正常')
  })
  .catch(() => {
    console.error('数据库连接失败')
  })
module.exports = {
  dbInstance,
}
