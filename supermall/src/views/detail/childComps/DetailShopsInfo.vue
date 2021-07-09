<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-06-30 15:44:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-30 17:38:37
-->
<template>
    <div id="detailshopsinf" v-if="Object.keys(shops).length!==0">
        <div class="logo">
            <img :src="shops.logo" alt="">
            <span>{{shops.name}}</span>
        </div>

        <table class="score">
            <tbody>
                <tr>
                    <td rowspan="3">
                        <div>{{shops.sells | getSell}}万</div>
                        <div style="margin-top: 10px;">
                            总销量
                        </div>
                    </td>
                    <td rowspan="3">
                        <div>{{shops.goodsCount}}</div>
                        <div style="margin-top: 10px;">
                            全部宝贝
                        </div>
                    </td>
                    <td>
                        {{shops.score[0].name}}
                    </td>
                    <td class="normal-score" :class="{'better-score': shops.score[0].isBetter}">
                        {{shops.score[0].score}}
                    </td>
                    <td v-if="shops.score[0].isBetter===false"><span class="normal">低</span></td>
                    <td v-if="shops.score[0].isBetter"><span class="better" >高</span></td>
                </tr>
                <tr>
                    <td style="border-left: 1px solid rgb(176, 179, 176);">
                        {{shops.score[1].name}}
                    </td>
                    <td class="normal-score" :class="{'better-score': shops.score[1].isBetter}">
                        {{shops.score[1].score}}
                    </td>
                    <td v-if="shops.score[1].isBetter===false"><span class="normal">低</span></td>
                    <td v-if="shops.score[1].isBetter"><span class="better" >高</span></td>
                </tr>
                <tr>
                    <td>
                        {{shops.score[2].name}}
                    </td>
                    <td class="normal-score" :class="{'better-score': shops.score[2].isBetter}">
                        {{shops.score[2].score}}
                    </td>
                    <td v-if="shops.score[2].isBetter===false"><span class="normal">低</span></td>
                    <td v-if="shops.score[2].isBetter"><span class="better" >高</span></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "DetailShopsInfo",
        data() {
           return {}
        },
        props: {
            shops: {
                typeof:Object,
                default() {
                    return {}
                }
             }
        },
        filters: {
            getSell(total) {
                total = parseInt(total);
                var res = 0;
                while(parseInt(total/10000) !== 0) {
                    res += parseInt(total/10000);
                    total = total % 10000;
                }
                res += total / 10000;
                return res.toFixed(2);
            }
            /* 
            res = 1

            */
        }
    }
</script>

<style>
    #detailshopsinf {
        margin-top: 20px;
        font-size: 15px;
        box-shadow: 0 2px 50px rgba(0.8,0.9,0,.2);
        padding-top: 30px; 
    }
    .logo img{
        width: 40px;
        height: 40px;
        vertical-align: middle;
        margin-right: 10px;
    }



    table {
        margin-top: 20px;
        width: 100%;
        border-spacing: 10px;
        font-size: 13px;
        color: black;
    }

    table tr td {
        text-align: center;
        /* border-spacing: 10px; */
        padding:10px
    }


    .normal-score {
        color: #5ea732;
    }

    .better-score {
        color: #f13e3a;
    }


    .normal {
        color: #fff;
        background-color: green;
    }

    .better {
        color: #fff;
        background-color: red;
    }
</style>