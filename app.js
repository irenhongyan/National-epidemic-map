const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// 公共资源托管，public下的资源了以直接访问
app.use('/',express.static('public'));

app.get('/api/data', (req, res) => {
    res.send("data")
})
app.listen(8088, () => {
    console.log("当前服务器启动成 http://127.0.0.1:8088/");
})