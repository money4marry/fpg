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
  },
  state: {
    type: DataTypes.STRING,
  },
})

async function create(obj) {
  await dbInstance.sync()
  try {
    const gt = await GridTrade.create(obj)
    console.log('gt创建成功')
  } catch (err) {
    console.error(err)
  }
}

async function query() {
  await dbInstance.sync()
  try {
    const gts = await GridTrade.findAll()
    console.log('gt查询成功', gts.length)
    return JSON.parse(JSON.stringify(gts, null, 2))
  } catch (err) {
    console.error(err)
  }
}

async function exec(params) {
  switch (params.method) {
    case 'add':
      return await create(params.params)
    case 'query':
      return await query(params.params)
    default:
      break
  }
}

GridTrade.exec = exec

module.exports = {
  GridTrade,
  create,
  query,
  exec,
}
