

'use strict';

    
    
{
    const setImage = [
        "./img/run.jpg",
        "./img/cat.jpg",
        "./img/pc.jpg",
        "./img/romanesuko.jpg",
    ];
    const view = document.getElementById('view');
    
    let current = 0;

    function next() {
            view.classList.add("appear");
            current++;
            console.log(current);
            if (current > setImage.length - 1) {
                current = 0;
            }
            view.src = setImage[current];
            setTimeout('view.classList.remove("appear");', 1500);
    };

    function autoPlay() {
        setTimeout(function () {
            next();
            autoPlay();
        }, 5000);
    }
    window.onload = autoPlay();
}







