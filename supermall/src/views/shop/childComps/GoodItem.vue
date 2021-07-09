<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-07-02 18:36:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-03 10:26:53
-->
<template>
    <div id="goods-item">
        <ul>
            <li v-for="(item,id) in cartList" :key="id">
                <div class="cart-item">
                    <form action="">
                        <input type="checkbox" class="select" v-model="item.checked">   
                    </form>
                
                    <div class="img">
                        <img :src="item.image">
                    </div>
                    <div class="show-info">
                        <p>
                            {{item.title}}
                        </p>
                        <br>
                        <p style="font-size: 13px;">
                            {{item.desc}}
                        </p>
                        <div class="info">
                            <div class="price">
                                ￥{{item.price}}
                            </div>
                            <div class="count">
                                X{{item.count}}
                            </div> 
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    
    </div>
</template>

<script>
    export default {
        props: {
            cartList: {
                type:Array,
            }
        },
    }
</script>

<style scoped>
    .cart-item {
        padding: 3px 3px;
        border-bottom: 1px solid rgb(194, 188, 188);
        position: relative;
    }

    .select {
        border: 2px solid black;
        position: absolute;
        top: 50%;
        transform: translateY(-12px);
        width: 25px;
        height: 25px;
        border-radius: 12px;
        margin-right: 3px;
        box-shadow: 5px 5px 3px rgba(10,10,10,0.5);
    }

    .show-info {
        display: inline-block;
        margin-left: 8px;
        width: 60%;
        font-size: 15px;
    }

    .show-info p {
        height: 20px;
        white-space:nowrap;
        text-overflow: ellipsis;
        overflow: hidden; 
    }

    .img {
        display: inline-block;
        vertical-align: top;
        width: 25%;
        height: 100px;
        /* border:1px solid black; */
        border-radius: 10px;
        height: 120px;
        overflow: hidden;
        margin-left: 30px;
    }
    img {
        width: 100%;
        height: 100%;
    }

    ul {
        list-style: none;
    }
    ul li {
        /* height: 100px; */
        line-height: 100%;
        height: 100%;
    }

    .select:checked {
		border: 1px solid var(--color-high-text);
		background: url(~assets/images/detail/check_active.png) no-repeat center;
		background-size: cover;
	}

    .info {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
        width: 200px;
    }

    .price {
        color: red;
    }
</style>