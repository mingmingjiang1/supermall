<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-06-27 15:13:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-29 10:29:14
-->
<template>
    <div class="tab-control">
        <div v-for="(index,i) in title" :key=i :class="{isActive: i==currentIndex}" @click="itemClick(i)">
            <span>{{index}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentIndex:0,
                tabBarOffset: 0,
            }
        },
        props:{
            title:{
                type:Array
            }
        },
        methods: {
            itemClick(i) {
                this.currentIndex = i;
                this.$emit("TabClick", i);
            }
        },
    }
</script>

<style scoped>
    .tab-control {   
        padding-top: 10px;
        display: flex;
        text-align: center;
        background-color: #fff;
    }

    .tab-control div {
        flex: 1;
        height: 40px;
        list-style: 40px;
        font-size: 16px;
    }

    /* .tab-control div:hover {
        color:var(--color-high-text)
    } */

    .tab-control div span {
        padding: 0 5px;
        padding-bottom: 10px;
    }

    .isActive {
        color:var(--color-high-text)
    }
    .isActive span {
        border-bottom: 3px solid var(--color-text);
    }
</style>