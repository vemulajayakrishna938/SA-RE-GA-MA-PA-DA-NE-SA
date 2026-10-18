lst = ['sa.mp3', 're.mp3', 'ga.mp3', 'ma.mp3', 'pa.mp3', 'da.mp3', 'ne.mp3', 'sa.mp3']

function music_player(){
    for(let i = 0; i<lst.length; i++) {
        let audio = new Audio(lst[i]);
        audio.play();
    }
}

let playbtn = document.querySelector("#playbtn")
playbtn.addEventListener("click", music_player())

let pausebtn = document.querySelector("#pausebtn");
pausebtn.addEventListener("click", audio.pause())