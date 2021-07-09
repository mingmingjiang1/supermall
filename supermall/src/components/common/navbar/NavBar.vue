<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-06-27 12:11:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-27 13:39:20
-->
<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="middle">
            <slot name="middle"></slot>
        </div>
        <div class="right">  
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    .nav-bar {
        display: flex;
        line-height: 44px;
        height: 44px;
        text-align: center;
        box-shadow: 0 1px 1px rgba(0,0,0,.5);
    }

    .left,.right {
        width: 60px;
    }

    .middle {
        flex: 1;
    }
</style>