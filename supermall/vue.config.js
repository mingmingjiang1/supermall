/*
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2021-06-26 17:05:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-26 18:05:02
 */
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        "assets": "@/assets",
        "common": "@/common",
        "components": "@/components",
        "network": "@/network",
        "views": "@/views",
      }
    }
  }
}
