const { DataTypes } = require('sequelize')
const { dbInstance } = require('../db.js')
//
const GridTrade = dbInstance.define('GridTrade', {
  symbol: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stock_chi_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
})

async function create(obj) {
  await dbInstance.sync()
  try {
    const gt = await GridTrade.create(obj)
    console.log('gt创建成功', gt)
  } catch (err) {
    console.error(err)
  }
}

async function query() {
  await dbInstance.sync()
  try {
    const gts = await GridTrade.findAll()
    console.log('gt查询成功', gts)
  } catch (err) {
    console.error(err)
  }
}

async function exec(params) {
  console.log('查询参数', params)
  query()
}

GridTrade.exec = exec

module.exports = {
  GridTrade,
  create,
  query,
  exec,
}
