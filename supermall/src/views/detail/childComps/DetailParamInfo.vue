<!--
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-06-30 22:20:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-02 19:04:48
-->
<template>
	<div v-if="Object.keys(paramInfo).length !== 0" class="params-wrap">
		<table class="rule">
			<tbody>
				<tr v-for="(index,i) in paramInfo.rule.tables[0]" :key="i">
					<td v-for="item in index">
						{{item}}
					</td>
				</tr>
			</tbody>
		</table>

		<table class="info">
			<tbody>
				<tr v-for="(index,i) in paramInfo.info.set" :key="i">
					<td>
						{{index.key}}
					</td>
					<td>
						{{index.value}}
					</td>
				</tr>
			</tbody>
		</table>

		<div class="info-img" v-if="paramInfo.info.images">
			<img src="paramInfo.info.images[0]" alt="" @loadImage="loadImage">
		</div>	
	</div>
</template>

<script>
	export default {
		name:'DetailParamInfo',
		props: {
			paramInfo: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
            loadImage() {
                this.$emit("loadImage");
            }
        }
	}
</script>

<style scoped>
	.params-wrap {
		border-top: 4px solid #ececec;
		border-bottom: 4px solid #ececec;
	}

	.rule tr {
		border: 1px solid #ececec;
	}

	.rule tr td {
		white-space: nowrap;
	}

	.info {
		font-size: 13px;
	}

	.info tr td:first-child {
		color: black;
		white-space: nowrap;
	}

	.info tr td:nth-child(2) {
		text-align: left;
		color: var(--color-text);
	}
</style>
