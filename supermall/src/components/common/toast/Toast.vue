<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-07-03 17:55:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-03 20:17:10
-->

<template>
    <div class="toast" v-show="isShow">
        <div>{{message}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false,
            message: "",
        }
    },

    methods: {
        show(message="默认文字", delay=2000) {
            this.isShow = true;
            this.message = message;
            setTimeout(()=>{this.isShow = false;this.message=""}, delay)
        }
    }
}
</script>

<style scoped>

.toast div{
    position: absolute;
    background-color: rgba(0, 0, 0, .5);
    left: 50%;
    top: 50%;
    transform: translateX(-90px);
    width: 180px;
    height: 40px;
    font-size: 15px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    transition: all 10s;
    z-index: 9999;
}
</style>
