// 网格交易
import { Table, Space, Button, Modal } from 'antd'
import { BetaSchemaForm } from '@ant-design/pro-components'
import React, { useState } from 'react'

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

const test = (r) => {
  window.electronAPI.GridTrade({
    method: 'query',
    params: r,
  })
}
const valueEnum = {
  all: { text: '全部', status: 'Default' },
  open: {
    text: '未解决',
    status: 'Error',
  },
  closed: {
    text: '已解决',
    status: 'Success',
    disabled: true,
  },
  processing: {
    text: '解决中',
    status: 'Processing',
  },
}
const formItem = [
  {
    title: '标题',
    dataIndex: 'title',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: 'md',
    colProps: {
      xs: 24,
      md: 12,
    },
    initialValue: '默认值',
    convertValue: (value) => {
      return `标题：${value}`
    },
    transform: (value) => {
      return {
        title: `${value}-转换`,
      }
    },
  },
  {
    title: '状态',
    dataIndex: 'state',
    valueType: 'select',
    valueEnum,
    width: 'md',
    colProps: {
      xs: 24,
      md: 12,
    },
  },
]

const GridTrade = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <Modal title="Basic Modal" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <BetaSchemaForm
        trigger={
          <Button type="primary" onClick={showModal}>
            新增
          </Button>
        }
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
          console.log(values)
        }}
        columns={formItem}
      />
      <Table columns={columns} dataSource={data} />
    </>
  )
}

export default GridTrade
