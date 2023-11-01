script:

```let uiplusRequest = new XMLHttpRequest();
uiplusRequest.open('GET', 'https://raw.githubusercontent.com/SadDawgBro/Krunker-UI-/main/ui.js', false);
uiplusRequest.send();
new Function(uiplusRequest.responseText)();```
