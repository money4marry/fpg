// 网格交易
import { Table, Space, Button } from 'antd'
import { useEffect } from 'react'

const columns = [
  { title: '名称', dataIndex: 'name', key: 'name' },
  { title: '盈亏', dataIndex: 'age', key: 'age' },
  { title: '更新时间', dataIndex: 'updatedAt', key: 'updatedAt' },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="small">
        <Button type="link" onClick={() => test(record)}>
          查看
        </Button>
      </Space>
    ),
  },
]
let data = [
  {
    name: '600519',
    age: -0.9,
  },
]

function test(r) {
  console.log(r)
  window.electronAPI.GridTrade({
    method: 'query',
    params: r,
  })
}
const GridTrade = () => {
  useEffect(() => {}, [])
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  )
}

export default GridTrade
