function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let final = new Audio('data/win-sound.mp3');

var efect = "tada";
var preload = document.getElementById('preload');
var loading = document.getElementById('loading');

var institution = document.getElementById('institution');

var genera = document.getElementById('generar');
var reiniciar = document.getElementById('reiniciar');

var available = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

genera.onclick = () => {

    var x = document.getElementById("myAudio");
    x.play();

    var count = 0;

    var number = getRandomInt(1, 18);

    while (available[number - 1] === 1) {
        number = getRandomInt(1, 18);
        count++;
        if (count > 17) {
            console.log('Final');
            return;
        }
    }

    if (available[number - 1] === 0) {
        available.splice(number - 1, 1, 1);
    }

    console.log(number);

    preload.classList.add("preloader");
    loading.classList.add("loading-circle");
    loading.classList.add("fa-spin");

    setTimeout(() => {
        preload.classList.remove("preloader");
        loading.classList.remove("loading-circle");
        loading.classList.remove("fa-spin");

        institution.innerHTML = list[number - 1].institution;
        finalSound();
    }, 7500);


}

function finalSound() {
    // Stop and rewind the sound if it already happens to be playing.
    final.pause();
    final.currentTime = 0;

    // Play the sound.
    final.play();
}



/**
genera.onclick = () => {
   
    // the code you're looking for
    var number = getRandomInt(1, 90);

    // iterate over each element in the array
    for (var i = 0; i < list.length; i++) {

        // look for the entry with a matching `code` value    
        if (list[i].code == number) {            
            console.log(list[i].code);
            code.innerHTML = list[i].code;
            fullname.innerHTML = list[i].fullname;
            institution.innerHTML = list[i].institution;
        }
    }

}
 */

reiniciar.onclick = () => {
    institution.innerHTML = 'xx - xx - xx - xx ';
}
