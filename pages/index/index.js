//index.js
//获取应用实例
const app = getApp()
import Toast from '../../miniprogram_npm/vant-weapp/toast/toast'
const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州']
};
Page({
  data: {
    show: false,
    checked: true,
    icon: {
      normal: '../../assets/images/1169251.png',
      active: '../../assets/images/1131981.png'
    },
    list: ['a', 'b', 'c'],
    result: ['a', 'b'],
    minHour: 10,
    maxHour: 20,
    minDate: new Date().getTime(),
    maxDate: new Date(2019, 10, 1).getTime(),
    currentDate: new Date().getTime(),
    value: '',
    columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    column2: [{
        text: '杭州',
        disabled: true
      },
      {
        text: '宁波'
      },
      {
        text: '温州'
      }
    ],
    column3:[{
      values:Object.keys(citys),
      className:'column1'
    },{
      values:citys['浙江'],
      className:'column2',
      defaultIndex:2
    }],
    radio:'1',
    value1:3,
    currentValue:10,
    checked:true
  },
  onLoad: function () {

  },
  onClose() {
    this.setDate({
      show: false
    })
  },
  onChange(event) {
    this.setData({
      checked: event.detail
    })
  },
  onChange1(event) {
    this.setData({
      result: event.detail
    })
  },
  toggle(event) {
    const {
      name
    } = event.currentTarget.dataset;
    const checkbox = this.selectComponent(`.checkboxes-${name}`);
    checkbox.toggle();
  },
  noop() {},
  onChange3(event) {
    this.setData({
      currentDate: event.detail.value
    })
  },
  onChange4(event) {
    this.setData({
      value: event.detail
    })
    console.log(event.detail)
  },
  onChange5(event) {
    const {
      picker,
      value,
      index
    } = event.detail;
    Toast(`当前值：${value},当前索引：${index}`)
  },
  onConfirm(event){
    const {picker,value,index}=event.detail;
    Toast(`当前值：${value},当前索引：${index}`)
  },
  onCancel(){
    Toast('取消')
  },
  onChange6(event) {
    const {
      picker,
      value,
      index
    } = event.detail;
    picker.setColumnValues(1,citys[values[0]]);
  },
  onChange7(event){
    this.setData({radio: event.detail });
  },
  onClick(event) {
    const {
      value
    } = event.currentTarget.dataset;
    this.setData({
      radio: value
    });
  },
  onChange8(event){
    this.setData({
      value:event.detail
    })
  },
  onChange9(event) {
    wx.showToast({
      icon:'none',
      title:`当前值：${event.detail}`
    })
  },
  onDrag(event){
    this.setData({
      currentValue:event.detail.value
    })
  },
  onChange11({detail}) {
    this.setData({checked:detail})
  },
  onChange12({ detail }) {
    wx.showModal({
      title:"提示",
      content:"是否切换开关",
      success:res=>{
        if(res.confirm){
          this.setData({checked:detail})
        }
      }
    })
  }
})