// ==UserScript==
// @name         nunutv
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  remove ad
// @author       rindy
// @match        https://www.nunuyy2.org/*/*
// @icon         https://www.hltv.org/img/static/favicon/favicon-32x32.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.head.insertAdjacentHTML('beforeend', `<style>dvszm{display:none}</style>`)
})();