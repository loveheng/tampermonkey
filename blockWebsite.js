// ==UserScript==
// @name         NEVER Play Mahjong Again!!!
// @namespace    https://ucw.moe/
// @version      0.1.0
// @description  NEVER Play Mahjong Again!!!
// @author       wuxianucw
// @run-at       document-start
// @match        https://*.ithome.com/*
// @match        https://*.zhihu.com/*
// @match        https://sspai.com/*
// @match        https://*.smzdm.com/*
// @match        https://*.dapenti.com/*
// @match        https://*.nodocchi.moe/*
// @match        https://maj-soul.com/*
// @match        https://*.maj-soul.com/*
// @match        http://*.eastmoney.com/*
// @match        https://www.weibo.com/*
// @match        https://quote.eastmoney.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var domain = window.location.host;
    console.log(domain);
    document.write('<div id="nerver"style="color: red; font-size: 64px;text-align: center; vertical-align: middle; height: 100vh; display: flex; justify-content: center; align-items: center;"></div>');
    var content = document.getElementById("nerver");
    content.innerHTML="NEVER Play "+domain.replace("www.","")+" Again!!!";
    window.stop();
})();
