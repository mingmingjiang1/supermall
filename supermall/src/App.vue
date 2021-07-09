<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-06-26 17:05:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-30 13:34:23
-->
<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>

import MainTabBar from "components/content/MainTabBar/MainTabBar"
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import url(assets/css/base.css);
@import url(assets/css/reset.css);
</style>
