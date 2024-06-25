document.addEventListener('DOMContentLoaded', function () {
    const ele = document.getElementById("ele1");

    const pintar = function(elemento, color = 'green') {
        elemento.style.backgroundColor = color;
    };

    pintar(ele);

    ele.addEventListener("click", function() {
        pintar(ele, 'yellow'); 
    });
});