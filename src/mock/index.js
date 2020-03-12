import Mock from 'mockjs'

Mock.mock('api/tableData', 'get', {
  code: 200,
  msg: '获取成功',
  'data|500': [
    {
      id: '@increment(1)',
      name: '@cname()',
      status:'@integer(0, 2)',
      serverNum: '@integer(50, 1000)',
      date: '@date',
      desc: '@cword(3, 10)'
    }
  ]
})