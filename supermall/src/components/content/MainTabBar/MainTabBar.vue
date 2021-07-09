<template>
  <div class="main-tab-bar">
    <TabBar>
      <TabBarItem path="/home">
        <img slot="item-icon" src="~assets/images/tabbar/home.png" alt="" srcset="">
        <img slot="item-icon-active" src="~assets/images/tabbar/home_active.png" alt="" srcset="">
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/categories">
        <template #item-icon>
          <img src="~assets/images/tabbar/categories.png" alt="" srcset="">
        </template>
        <template #item-icon-active>
          <img src="~assets/images/tabbar/categories_active.png" alt="" srcset="">
        </template>
        <template #item-text>
          <div>分类</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/shop">
        <template #item-icon>
          <img src="~assets/images/tabbar/shopcart.png" alt="" srcset="">
        </template>
        <template #item-icon-active>
          <img src="~assets/images/tabbar/shopcart_active.png" alt="" srcset="">
        </template>
        <template #item-text>
          <div>购物车</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/profile">
        <template #item-icon>
          <img src="~assets/images/tabbar/profile.png" alt="" srcset="">
        </template>
        <template #item-icon-active>
          <img src="~assets/images/tabbar/profile_active.png" alt="" srcset="">
        </template>
        <template #item-text>
          <div>我的</div>
        </template>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar"
  import TabBarItem from "components/common/tabbar/TabBarItem"
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }

</script>

<style scoped>
</style>
