<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-06-27 11:33:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-03 10:23:38
-->
<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="left" class="left" @click="backClick">
      </div>
      <div slot="middle">购物车({{length}})</div>
    </nav-bar>
    <scroll ref="scroll" class="content">
      <good-item :cartList="shopList" @allSelected="allSelected">
      </good-item>
    </scroll>

    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import Scroll from 'components/common/scroll/Scroll'
  import GoodItem from "views/shop/childComps/GoodItem"
  import CartBottomBar from "views/shop/childComps/CartBottomBar"
  import { mapGetters } from 'vuex'

  
export default {
  name: "Shop",
  data() {
    return {}
  },
  components: {
    NavBar,
    Scroll,
    GoodItem,
    CartBottomBar
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    allSelected() {
      console.log("----")
    }
  },
  computed: {
    ...mapGetters(
      {
        length:"getCartListLength",
        shopList:"getCartList"
      }
    )
  }
}
</script>

<style scoped>
  #cart .nav-bar{
    background-color: pink;
    font-weight: 700;
  }




  .left {
    margin-top: 13px;
    margin-left: 20px;
    border: 1px solid black;
    width: 18px;
    height: 18px;
    border-left: 0;
    border-bottom: 0;
    transform: rotate(225deg);
  }
  #cart {
    /* padding-top: 44px; */
    height: 100vh;
  }


  .content {
    overflow: hidden;
    height: calc(100% - 93px - 40px);
  }
</style>
