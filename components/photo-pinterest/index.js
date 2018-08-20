/*
 * @Author: Lac 
 * @Date: 2018-08-20 15:09:37 
 * @Last Modified by:   Lac 
 * @Last Modified time: 2018-08-20 15:09:37 
 */

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    photos: {
      type: Array,
      value: [],
      observer: '_handlePhotosArr'
    },
    cols: Number
  },
  /**
   * 组件的初始数据
   */
  data: {
    previewPhotos: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap: function (ev) {
      let { currentphoto, photos } = ev.currentTarget.dataset
      wx.previewImage({
        current: currentphoto, // 当前显示图片的http链接
        urls: photos // 需要预览的图片http链接列表
      })
    },

    _handlePhotosArr: function () {
      const { photos } = this.properties
      if (!photos || photos.length === 0) {
        return
      }
      let tempArr = []
      for (let i = 0; i < photos.length; i++) {
        tempArr.push(photos[i].photo.large_url)
      }
      this.setData({
        previewPhotos: tempArr
      })
    }
  }
})
