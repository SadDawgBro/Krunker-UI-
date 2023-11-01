document.getElementById("signedInHeaderBar").style.backgroundColor = "rgb(11 11 11)";
document.getElementById("headerRight").style.backgroundColor = "rgb(25 25 25)";
document.getElementById("mapInfoHolder").style.backgroundColor = "rgb(37 37 37)";
document.getElementById("topRightAdHolder").style.backgroundColor = "rgb(14 14 14 / 82%)";
document.getElementById("streamContainer").style.backgroundColor = "rgb(14 14 14 / 82%)";

document.getElementById("homeStoreAd").style.backgroundColor = "rgb(33 33 33)";
document.getElementById("newUserGuide").style.backgroundColor = "rgb(19 19 19)";
document.getElementById("krDiscountAd").style.backgroundColor = "rgb(19 19 19)";
document.getElementById("twitchDropsAd").style.backgroundColor = "rgb(19 19 19)";
document.getElementById("freeKRAd").style.backgroundColor = "rgb(19 19 19)";
document.getElementById("doubleRaidDropsAd").style.backgroundColor = "rgb(19 19 19)";
document.getElementById("doubleClassXPAd").style.backgroundColor = "rgb(19 19 19)";
document.getElementById("doubleXPAd").style.backgroundColor = "rgb(19 19 19)";
document.getElementById("eventAd").style.backgroundColor = "rgb(19 19 19)";
document.getElementById("updateAd").style.backgroundColor = "rgb(19 19 19)";
document.getElementById("battlepassAd").style.backgroundColor = "rgb(19 19 19)";
document.getElementById("modVote").style.backgroundColor = "rgb(19 19 19)";

document.getElementById("menuBtnHost").style.border = "4px solid #4f4f4f!important";
document.getElementById("menuBtnBrowser").style = "border: 4px solid #4f4f4f!important";
document.getElementById("inviteButton").style = "border: 4px solid #4f4f4f!important";
document.getElementById("menuBtnJoin").style = "border: 4px solid #4f4f4f!important";
document.getElementById("customizeButton").style = "border: 4px solid rgb(148 148 148)!important";

var menuItemContainerHTML = '<div id="menuItemContainer" style="background-color: rgb(11, 11, 11);"><div class="menuItem" onmouseenter="playTick()" onclick="playSelect(),logBtnFRVR(&quot;profile&quot;),showWindow(5)"><span class="material-icons-outlined menBtnIcn" style="color: #9a9a9a;">person</span><div class="menuItemTitle" id="menuBtnProfile" style="font-size:13px">Profile &amp; Friends</div></div><div class="menuItem" onmouseenter="playTick()" onclick="playSelect(),logBtnFRVR(&quot;shop_crafting&quot;),showWindow(14)"><span class="material-icons-outlined menBtnIcn" style="color:#9a9a9a">storefront</span><div class="menuItemTitle" id="menuBtnShop" style="font-size:13px">Shop</div></div><div class="menuItem" onmouseenter="playTick()" onclick="playSelect(),logBtnFRVR(&quot;challenges&quot;),windows[32].openHome()"><span class="material-icons-outlined menBtnIcn" style="color:#9a9a9a">flag</span><div class="menuItemTitle" id="menuBtnChall" style="font-size:13px">Challenges</div></div><div class="menuItem" onmouseenter="playTick()" onclick="playSelect(),logBtnFRVR(&quot;hub&quot;),window.open(&quot;/social.html&quot;,&quot;_blank&quot;)"><span class="material-icons-outlined menBtnIcn" style="color:#fff">public</span><div class="menuItemTitle" id="menuBtnSocial">Hub</div></div><div class="menuItem" onmouseenter="playTick()" onclick="playSelect(),logBtnFRVR(&quot;games&quot;),showGames()"><span class="material-icons-outlined menBtnIcn" style="color:#9a9a9a">sports_esports</span><div class="menuItemTitle" id="menuBtnMaps">Games</div></div><div class="menuItem" onmouseenter="playTick()" onclick="playSelect(),logBtnFRVR(&quot;mods&quot;),showWindow(4)"><span class="material-icons-outlined menBtnIcn" style="color:#9a9a9a">color_lens</span><div class="menuItemTitle" id="menuBtnMods">Mods</div></div><div class="menuItem" onmouseenter="playTick()" onclick="playSelect(),logBtnFRVR(&quot;settings&quot;),showWindow(1)"><span class="material-icons-outlined menBtnIcn" style="color:#9a9a9a">settings</span><div class="menuItemTitle" id="menuBtnSettings">Settings</div></div><div class="menuItem" onmouseenter="playTick()" onclick="playSelect(),logBtnFRVR(&quot;exit&quot;),clientExitPopup()" id="clientExit"><span class="material-icons-outlined menBtnIcn" style="color:#fb5555">exit_to_app</span><div class="menuItemTitle" id="menuBtnExit">Exit</div></div></div>';

document.getElementById("menuItemContainer").innerHTML = menuItemContainerHTML;
