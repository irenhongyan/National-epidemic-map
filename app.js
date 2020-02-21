const express = require('express');
const app = express();

const superagent = require('superagent');
const cheerio = require('cheerio');
const url = "https://ncov.dxy.cn/ncovh5/view/pneumonia";

// 公共资源托管，public下的资源了以直接访问
app.use('/',express.static('public'));

// 程序运行后爬取疫情信息
var dataObj = {}
superagent.get(url).then(res => {
    const $ = cheerio.load(res.text)
    var $getListByCountryTypeService1 = $('#getListByCountryTypeService1').html();
    eval($getListByCountryTypeService1.replace(/window/g, 'dataObj'));
})

// api
app.get('/api/data', (req, res) => {
    res.send(JSON.stringify(dataObj))
})

app.listen(8088, () => {
    console.log("当前服务器启动成 http://127.0.0.1:8088/");
})