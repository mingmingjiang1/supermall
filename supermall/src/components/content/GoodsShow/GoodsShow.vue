<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-06-27 17:38:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-02 09:57:53
-->
<template>
    <div class="goods-show">
        <div v-for="(item,i) in goods" :key="i">
            
                <img :src="showImage(item)" alt="" @click="itemClick(item)" @load="loadImage">
            
            <div class="goods-info">
                <p class="title">{{item.title}}</p>
                <span class="price">{{item.price}}</span>
                <span class="cfav">{{item.cfav}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            goods:{
                type:Array,
            }
        },
        methods: {
            itemClick(item) {
                this.$router.push('/detail/'+item.iid)
            },
            showImage(item) {
                return item.image || item.show.img;
            },
            loadImage() {
                this.$emit("loadImage");
            }
        },
        
    }
</script>

<style scoped>
    .goods-show {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .goods-show div {
        width: 48%;
        height: 380px;
    }
    .goods-show div img {
        width: 100%;
        height: 300px;
        border-radius: 5px;
    }

    .goods-show .goods-info {
        margin: 0;
        margin-top: 10px;
        font-size: 18px;
        text-align: center;
        overflow: hidden;
        width: 100%;
    }

    .title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 5px;
    }
    .goods-info .price {
        color: var(--color-high-text);
        margin-right: 20px;
    }

    .goods-info .cfav::before {
        content: "";
        display: inline-block;
        width: 14px;
        height: 14px;
        background: url("~assets/images/home/collect_icon.png") 0 0/14px 14px ;
    }
    
</style>