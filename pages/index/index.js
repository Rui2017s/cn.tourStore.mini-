//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    show: false,
    checked: true,
    icon: {
      normal: '../../assets/images/1169251.png',
      active: '../../assets/images/1131981.png'
    },
    list:['a','b','c'],
    result:['a','b'],
    minHour:10,
    maxHour:20,
    minDate:new Date().getTime(),
    maxDate:new Date(2019,10,1).getTime(),
    currentDate:new Date().getTime(),
    value:''
  },
  onLoad: function () {

  },
  onClose() {
    this.setDate({
      show: false
    })
  },
  onChange(event){
    this.setData({
      checked:event.detail
    })
  },
  onChange1(event) {
    this.setData({
      result: event.detail
    })
  },
  toggle(event){
    const {name}=event.currentTarget.dataset;
    const checkbox=this.selectComponent(`.checkboxes-${name}`);
    checkbox.toggle();
  },
  noop(){},
  onChange3(event){
    this.setData({
      currentDate:event.detail.value
    })
  },
  onChange4(event) {
    this.setData({
      value:event.detail
    })
    console.log(event.detail)
  }
})