<template>
  <div>
      <header>我的</header>
      <div class="user-home">
        <div class="user-info">
          <img src="" alt="">
          <div>泽渡</div>
          <div></div>
        </div>
        <div class="user-group">
          扫一扫<button @click="handleClick">开始扫</button>
        </div>
        <div class="user-group">

        </div>
      </div>
  </div>
</template>

<script>


export default {
  methods:{
    handleClick(){
      wx.scanQRCode({
        needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
          var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
        }
      });
    }
  }
}
</script>

<style lang="stylus" scoped>
header
  padding 0.1rem
  background #1abc9c
  text-align center
  font-size 0.17rem
  line-height 0.23rem
  color #fff
  font-family: PingFangSC-Light, sans-serif;
.user-home
  padding 0.2rem 0
  background #fff
  .user-info
    display flex
</style>