<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-07-02 20:36:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-03 22:32:17
-->
<template>
	<div class="cart-bot-bar flex">
		<div><input type="checkbox" class="check" id="check" v-model="allSelected">&ensp;<label for="check"> 全部</label> </div>
        <div style="background-color: red;height: 100%;text-align: center;width:100px;line-height: 40px;font-size: 14px;padding: 2px;color: #fff;">合计:{{getTotalPrice}}</div>
		<div style="background-color: red;height: 100%;text-align: center;width:100px;line-height: 40px;font-size: 14px;padding: 2px;color: #fff;" @click="calculate">去结算:{{checkLength}}</div>
	</div>
</template>

<script>
    export default {
        data() {
            return {
                checked: false
            }
        },
        computed: {
            allSelected:{//个传总
                get() {
                    if(this.$store.state.cartList.length === 0) return false
                    return !(this.$store.state.cartList.filter(item=>!item.checked).length)
                },
                set(value) {//总传个
                    console.log(value)
                    this.checked = value;
                    if(this.checked) {
                        this.$store.state.cartList.forEach(i=>i.checked = true)
                    } else {
                        this.$store.state.cartList.forEach(i=>i.checked = false)
                    }
                }
            },
            getTotalPrice() {
                return '￥' + this.$store.state.cartList.filter(item => {
					return item.checked
				}).reduce((preValue, item) => {
					return preValue+ item.price * item.count
				},0).toFixed(2)
            },
            checkLength() {
				return '(' + this.$store.state.cartList.filter(item => item.checked).length + ')';
			},
        },
        methods: {
			calculate() {
				this.$toast.show("总价格"+this.getTotalPrice, 1000)
			}
        },

    }

</script>

<style scoped="scoped">
	.cart-bot-bar {
		position: fixed;
		bottom: 49px;
		left:0;
		right: 0;
		height: 40px;
		padding: 0 10px;
		font-size: 13px;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;
		border-bottom: 1px solid #ececec;
		border-top: 1px solid #ececec;
    }
	.check {
		width: 18px;
		height: 18px;
		overflow: hidden;
		border-radius: 100%;
		vertical-align: bottom;
		border: 1px solid #ececec;
    }
	.check:checked {
		border: 1px solid var(--color-high-text);
		background: url(~assets/images/detail/check_active.png) no-repeat center;
		background-size: cover;
	}
</style>