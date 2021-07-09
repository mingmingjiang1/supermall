<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-06-27 14:10:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-27 14:33:44
-->
<template>
    <div class="recommend">
        <ul>
            <li v-for="(item,i) in recommend">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                    <div>{{item.title}}</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            recommend: {
                type:Array
            }
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>

    .recommend {
        border-bottom: 8px solid #eee;
        padding-bottom: 20px;
        padding-top: 20px;
    }
    
    .recommend ul li{
        box-sizing: border-box;
        display: inline-block;
        width: 25%;
        text-align: center;
        padding: 0 10px;
        font-size: 14px;
    }

    .recommend ul li img {
        width: 100%;
        margin-bottom: 10px;
    }
</style>