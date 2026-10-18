let audio1 = new Audio('sa.mp3');
let audio2 = new Audio ('re.mp3');
let audio3 = new Audio ('ga.mp3');
let audio4 = new Audio ('ma.mp3');
let audio5 = new Audio ('pa.mp3');
let audio6 = new Audio ('da.mp3');
let audio7 = new Audio ('ne.mp3');

sa_btn = document.querySelector("#sa")
re_btn = document.querySelector("#re")
ga_btn = document.querySelector("#ga")
ma_btn = document.querySelector("#ma")
pa_btn = document.querySelector("#pa")
da_btn = document.querySelector("#da")
ne_btn = document.querySelector("#ne")

document.addEventListener('click', function(event) {
    switch (event.target) {
        case sa_btn:
            audio1.play()
            break;
        case re_btn:
            audio2.play()
            break;
        case ga_btn:
            audio3.play()
            break;
        case ma_btn:
            audio4.play()
            break;
        case pa_btn:
            audio5.play()
            break;
        case da_btn:
            audio6.play()
            break;
        case ne_btn:
            audio7.play()
            break;
        default:
            break;
    }
})

document.addEventListener("keypress", function(event){
    switch (event.key) {
        case 's':
            audio1.play()
            break;
        case 'r':
            audio2.play()
            break;
        case 'g':
            audio3.play()
            break;
        case 'm':
            audio4.play()
            break;
        case 'p':
            audio5.play()
        case 'd':
            audio6.play()
        case 'n':
            audio7.play()
            break;
        default:
            break;
    }
})




