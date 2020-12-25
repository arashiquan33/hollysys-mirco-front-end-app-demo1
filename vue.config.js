//const path = require("path");
const isBuildLib = process.env.build_lib;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  filenameHashing: false,
  devServer: {
    port: 9000
  },

  chainWebpack: config => {
    if (!isBuildLib) {
      //将微应用的html模板指向@hollysys-mirco-front-end/framework这个npm package中暴露的standalone.html
      //standalone.html中通过script脚本引入了unkg静态站点中发布的vue，vue-router,hollysys-mirco-front-end-framework.js等，这些js采用umd模块系统，当通过script加载时
      //将Vue,VueRouter,hollysysMircoFrontEndframework等共享对象挂载在window上
      //微应用配置externals告诉webpack构建的时候不把这些共享的对象打包进微应用自身的脚本中
      //然后微应用内部通过import Vue from 'Vue',import { HollysysMircoFrontEndApp } from "@hollysys-mirco-front-end/framework";引入
      config.plugin("html").tap(args => {
        args[0].template =
          "node_modules/@hollysys-mirco-front-end/framework/lib/standalone.html";
        return args;
      });
      config.plugin("cleanDist").use(new CleanWebpackPlugin());
    }
  },

  configureWebpack: function() {
    return {
      output: {
        libraryExport: "default"
      },
      externals: [
        {
          //import Vue from 'vue',将vue指向script引入的vue脚本带来的window全局变量Vue
          vue: "Vue"
        },
        //import {HollysysMircoFrontEndApp} from '@hollysys-mirco-front-end/framework'
        //将@hollysys-mirco-front-end/framework指向script引入的脚本，该脚本umd格式，在window上挂载了对象hollysysMircoFrontEndFramework
        {
          "@hollysys-mirco-front-end/framework":
            "hollysysMircoFrontEndFramework"
        }
      ]
    };
  }
};
