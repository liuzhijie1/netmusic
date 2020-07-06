<template>
  <div class="home">
      <div class="container-fluid header">
        <ul class="header-my">
          <li class="logo"></li>
          <li class="item active">发现音乐</li>
          <li class="item">我的音乐</li>
          <li class="item">朋友</li>
          <li class="item">商城</li>
          <li class="item">音乐人</li>
          <li class="item item-lg">
            <span>下载客户端</span>
            <span>&nbsp;</span>
          </li>
          <li class="search">
            <input type="text">
          </li>
          <li></li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header{
  height: 70px;
  background: #242424;
  border-bottom: 1px solid #000;
  // box-sizing: border-box;
  .header-my{
    display: flex;
    align-items: center;
    height: 100%;
    .logo{
      width: 176px;
      height: 100%;
      // background: red;
      margin-left: 40px;
      font-family: Arial,serif;
      background-image: url(~assets/img/frame/topbar.png);
    }
    .active{
      background: #000000;
    }
    .item{
      width: 60px;
      // flex: 1;
      font-size: 14px;
      height: 100%;
      padding: 0 19px;
      color: #ffffff;
      text-align: center;
      box-sizing: content-box;
      line-height: 70px;
      cursor: pointer;
      &:hover{
        background: #000000;
      }
    }
    .item-lg{
      width: 100px;
      display: flex;
      &>span:first-of-type{
        flex: 7;
      }
      &>span:last-of-type{
        flex: 3;
        background-image: url(~assets/img/frame/topbar.png);
        background-position: -189px 20px;
      }
    }
    .search{
      // border-radius: 120px !important;
    }
  }
}
</style>
