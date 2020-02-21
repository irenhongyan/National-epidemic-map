const superagent = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const url = "https://ncov.dxy.cn/ncovh5/view/pneumonia";
superagent.get(url).then(res => {
    //console.log(res.text);
    const $ = cheerio.load(res.text)
    var $getListByCountryTypeService1 = $('#getListByCountryTypeService1').html();
    //console.log($getListByCountryTypeService1);
    var dataObj = {}
    eval($getListByCountryTypeService1.replace(/window/g, 'dataObj'));
    //console.log(dataObj);
    fs.writeFile(path.join(__dirname, './data.json'), JSON.stringify(dataObj), err => {
        if (err) throw err;
        console.log('数据导入成功');
    })

})