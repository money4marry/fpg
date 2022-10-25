// 网格交易
import { Table, Space, Button } from 'antd'

const columns = [
  { title: '名称', dataIndex: 'name', key: 'name' },
  { title: '盈亏', dataIndex: 'age', key: 'age' },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="small">
        <Button type="link" onClick={() => test(record)}>查看</Button>
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
}
function GridTrade() {
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  )
}

export default GridTrade
