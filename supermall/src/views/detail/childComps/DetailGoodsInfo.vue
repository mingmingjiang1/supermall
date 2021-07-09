<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-06-30 14:05:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-30 15:44:24
-->
<template>
    <div id="detailgoodsinfo" v-if="Object.keys(goods).length!==0">
        <p class="info-title">
          {{goods.title | trimTitle}}  
        </p>

        <div class="info-price">
            <span>{{goods.newPrice}}</span>
            <span>{{goods.oldPrice}}</span>
            <span :style="{backgroundColor:goods.discountBgColor}">{{goods.discount}}</span>
        </div>

        <div class="info-other">
            <div>{{goods.columns[0]}}</div>
            <div>{{goods.columns[1]}}</div>
            <div>{{goods.services[0].name}}</div>
        </div>

        <div class="info-service">
            <span v-for="(service,i) in goods.services" v-if="i!=0">
                <img :src="service.icon" alt="">
                <span>{{service.name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailGoodsInfo",
        props: {
            goods: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        filters: {
            trimTitle(res) {
                return res.trim()
            }
        }
    }
</script>

<style scoped>
    #detailgoodsinfo .info-title{
        margin-top: 10px;
        font-size: 14px;
        color: black;
    }

    #detailgoodsinfo .info-price {
        height: 50px;
    }

    .info-price span:first-child {
        color: var(--color-high-text);
        font-size: 15px;
        margin-right: 10px;
        vertical-align: middle;
    }

    .info-price span:nth-child(2) {
        color: gray;
        font-size: 8px;
        text-decoration: line-through;
        margin-right: 10px;
    }

    .info-price span:nth-child(3) {
        color:#fff;
        padding: 2px;
        font-size: 12px;
        border-radius: 8px;
    }

    .info-other {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        font-size: 15px;
        text-align: center;
        border-bottom: 1px solid #eee;
        padding-bottom: 5px;
        margin-bottom: 20px;
    }

    .info-other div {
        flex: 1;
        width: 50px;
    }

    .info-service {
        display: flex;
        font-size: 12px;
        flex-wrap: nowrap;
        justify-content:space-between;
    }


    .info-service span img {
        width: 10px;
        height: 10px;
    }
</style>