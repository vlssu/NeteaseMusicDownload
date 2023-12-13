function openNew(){
    console.log('感谢使用VLssu提供的网易云音乐下载服务！');
    var link = document.getElementById("link").value;
    const NeteaseReg = new RegExp('music.163.com');
    const schemeReg = new RegExp('^https?://');

    if (NeteaseReg.test(link) && schemeReg.test(link)) {
        // 提取id参数的值
        var idMatch = link.match(/id=(\d+)/);
        var idValue = idMatch ? idMatch[1] : '';

        // 进行链接转换
        var ToOpen = link
            .replace("music.163.com", "api.vlssu.com/meting")
            .replace("/#/","/")
            .replace(/\?id=/, "?type=")
            .replace(/&userid=\d+/, "")  // 删除&userid参数

        // 如果成功提取到id参数的值，添加到新链接中
        if (idValue) {
            ToOpen = ToOpen + "&id=" + idValue;
        }

        window.open(ToOpen);
    }
    else{
        alert('请输入正确的网易云链接！\n例如 https://music.163.com/song?id=467787951&userid=252340012')
    }
}
