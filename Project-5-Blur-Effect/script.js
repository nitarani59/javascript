const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

function blurring() {
    load++;
    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`;
    loadText.computedStyleMap.opacity = 
    
}
