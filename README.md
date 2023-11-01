script:

``let uiplusRequest = new XMLHttpRequest();
uiplusRequest.open('GET', 'https://raw.githubusercontent.com/SadDawgBro/Krunker-UI-/main/ui.js', false);
uiplusRequest.send();
new Function(uiplusRequest.responseText)();```

tampermonkey script:
```// ==UserScript==
// @name         Krunker UI+
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Saddawgbro
// @match        *://krunker.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=krunker.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let uiplusRequest = new XMLHttpRequest();
    uiplusRequest.open('GET', 'https://raw.githubusercontent.com/SadDawgBro/Krunker-UI-/main/ui.js', false);
    uiplusRequest.send();
    new Function(uiplusRequest.responseText)();
})();
