Page({
  data: {
    name: '沈峰',
    age: 25,
    students: [
      { id: 110, name: 'zhangsan', age: 30 },
      { id: 111, name: 'lisi', age: 20 },
      { id: 112, name: 'wangwu', age: 40 }
    ],
    counter: 0
  },
  jia(){
    // this.data.counter+=1      错误写法
    this.setData({
      counter: this.data.counter +1
    })
  },
  jian() {
    this.setData({
      counter: this.data.counter -=1
    })
  },
})