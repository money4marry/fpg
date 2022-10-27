// 网格交易
import { Table, Space, Button } from 'antd'
import { BetaSchemaForm } from '@ant-design/pro-components'
import React, { useState, useEffect } from 'react'
import { statusEnum } from './const'

const columns = [
  { title: '名称', dataIndex: 'stock_chi_name', key: 'stock_chi_name' },
  { title: '代码', dataIndex: 'symbol', key: 'symbol' },
  { title: '状态', dataIndex: 'state', key: 'state' },
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

const test = (r) => {
  window.electronAPI.GridTrade({
    method: 'query',
    params: r,
  })
}
const add = (data) => {
  const params = {
    symbol: data.symbol,
    stock_chi_name: data.title,
    state: data.state,
  }
  window.electronAPI.GridTrade({
    method: 'add',
    params,
  })
}
const formItem = [
  {
    title: '名称',
    dataIndex: 'title',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
  },
  {
    title: '代码',
    dataIndex: 'symbol',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
  },
  {
    title: '状态',
    dataIndex: 'state',
    valueType: 'select',
    valueEnum: statusEnum,
  },
]

const GridTrade = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function temp() {
      const s = await window.electronAPI.GridTrade({
        method: 'query',
      })
      setData(s)
    }
    temp()
  }, [])
  return (
    <>
      <BetaSchemaForm
        trigger={<Button type="primary">新增</Button>}
        layoutType="ModalForm"
        steps={[
          {
            title: 'ProComponent',
          },
        ]}
        rowProps={{
          gutter: [16, 16],
        }}
        colProps={{
          span: 12,
        }}
        grid={true}
        onFinish={async (values) => {
          add(values)
          return true
        }}
        columns={formItem}
      />
      <Table columns={columns} dataSource={data} />
    </>
  )
}

export default GridTrade
