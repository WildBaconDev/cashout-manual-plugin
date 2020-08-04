'use strict';

document.getElementById("popup-btn-listagem").addEventListener("click", function () {
    window.open(
        chrome.extension.getURL("/views/listagem.html"),
        "Listagem de odds",
        "width=770,height=400"
    );
});

document.getElementById("popup-btn-historico").addEventListener("click", function () {
    console.log('Function not implemented')
});