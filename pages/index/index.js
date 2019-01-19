//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    show: false,
    checked: true,
    icon: {
      normal: '//img.yzcdn.cn/icon-normal.png',
      active: '//img.yzcdn.cn/icon-active.png'
    }
  },
  onLoad: function () {

  },
  onClose() {
    this.setDate({
      show: false
    })
  },
  onChange(event){
    this.setDate({
      checked:event.detail
    })
  }
})