!function(){var t={changeColorStartBtn:document.querySelector("[data-start]"),changeColorStoptBtn:document.querySelector("[data-stop]")},e=null;var o=function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t};t.changeColorStartBtn.addEventListener("click",(function(){e=setInterval(o,1e3),t.changeColorStoptBtn.removeAttribute("disabled"),t.changeColorStartBtn.setAttribute("disabled",!0)})),t.changeColorStoptBtn.addEventListener("click",(function(){clearInterval(e),t.changeColorStartBtn.removeAttribute("disabled"),t.changeColorStoptBtn.setAttribute("disabled",!0)}))}();
//# sourceMappingURL=01-color-switcher.574a8c74.js.map
