/* Selezione le immagini in jquery */

/* $("img").click(function() {
    alert("cliccato");
}) */


/* Selezione le immagini in javascript */

const sounds = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"];
const keyCodes = ["Q", "W", "E", "R", "T", "Y", "U"];
const images = document.querySelectorAll("img");
const letters = {

    "Q": "crash.mp3",
    "W": "kick-bass.mp3",
    "E": "snare.mp3",
    "R": "tom-1.mp3",
    "T": "tom-2.mp3",
    "Y": "tom-3.mp3",
    "U": "tom-4.mp3",

}



//listener alle immagine da cliccare


for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function(e) {
        let myId = e.target.id;
        for (let sound of sounds) {
            if (sound.includes(myId)) {
                let audio = new Audio("sounds/" + sound);
                audio.play();
            }

        }

    })
}



// listener ai tasti della tastiera

document.addEventListener("keypress", function(e) {

    for (let code of keyCodes) {
        if (e.code.includes(code)) {
            let audio = new Audio("sounds/" + letters[code]);
            audio.play();
        }
    }
})