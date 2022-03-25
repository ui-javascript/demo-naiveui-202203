<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :pagination="pagination"
    :single-line="false"
  />
</template>

<script setup>
import { h, defineEmits } from 'vue'
import { NTag, NButton, useMessage } from 'naive-ui'
const emit = defineEmits(["hello"])

const createColumns = ({ sendMail }) => {
  return [
    {
      title: 'Name',
      titleColSpan: 2,
      key: 'name',
      rowSpan: (rowData, rowIndex) => (rowIndex === 0 ? 2 : 1),
      colSpan: (rowData, rowIndex) => (rowIndex === 0 ? 2 : 1)
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Address',
      key: 'address',
      colSpan: (rowData, rowIndex) => (rowIndex === 2 ? 2 : 1)
    },
    {
      title: 'Tags',
      key: 'tags',
      titleColSpan: 2,
      render (row) {
        const tags = row.tags.map((tagKey) => {
          return h(
            NTag,
            {
              style: {
                marginRight: '6px'
              },
              type: 'info'
            },
            {
              default: () => tagKey
            }
          )
        })
        return tags
      }
    },
    {
      title: 'Action',
      key: 'actions',
      rowSpan: (rowData, rowIndex) => (rowIndex === 0 ? 2 : 1),
      render (row) {
        return h(
          NButton,
          {
            size: 'small',
            onClick: () => {
              sendMail(row)
            }
          },
          { default: () => 'Send Email' }
        )
      }
    }
  ]
}

const createData = () => [
  {
    key: 0,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['wow']
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

const message = useMessage()

const data = createData()
const columns = createColumns({
  sendMail (rowData) {
    // console.log(this)
    emit("hello", '触发');
    message.info('send mail to ' + rowData.name)
  }
})

const pagination = {
  pageSize: 10
}

</script>