/*
* @Author: hanjiyun
* @Date:   2018-06-25 16:30:41
 * @Last Modified by: jinan
 * @Last Modified time: 2018-08-03 12:33:55
*/


Component({
  behaviors: [],
  properties: {
    // 几条数据 1-10
    cardAmount: {
      type: Number,
      value: 3
    },

    // 颜色
    color: {
      type: String,
      value: '#dfdfdf'
    },

    // 背景颜色
    backgroundColor: {
      type: String,
      value: '#fff'
    },

    // 自定义卡片样式
    cardStyle: {
      type: String,
      value: ''
    },

    // 几条横线 1-4
    strokeAmount: {
      type: Number,
      value: 3
    },

    // 横线尺寸 rpx
    strokeSize: {
      type: Number,
      value: 20
    },

    // 是否显示封面（灰色方块）
    cover: {
      type: Boolean,
      value: true
    },

    // 封面位置 left right
    coverPosition: {
      type: String,
      value: 'left'
    },
    // 封面图尺寸 rpx
    coverSize: {
      type: Number,
      value: 200
    }
  },
  data: {
    tempCardList: [],
    strokeList: []
  },
  methods: {
  },
  created() {},
  attached() {
    let { cardAmount, strokeAmount } = this.data

    let tempCardList =  [...Array(cardAmount).keys()]
    let strokeList =  [...Array(strokeAmount).keys()]
    this.setData({
      tempCardList: tempCardList,
      strokeList: strokeList
    })
  },
  ready() {},
  moved() {},
  detached() {}
})