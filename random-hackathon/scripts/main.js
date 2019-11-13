function spinSound() {
  var sound = document.getElementById("roulette-spin");
  sound.play()
}

function winSound() {
  var sound = document.getElementById("win-sound");
  sound.play()
}

let theWin;

// to get the winning number
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

$("#generar").click(function () {

  var desde = $('#desde').val();
  var hasta = parseInt($('#hasta').val());

  if (desde < hasta) {

    var intervalID = setInterval(function () {
      $('#magicalnumber').text(getRandomInt(desde, parseInt(hasta + 1)))
    }, 100);

    setTimeout(function () {
      clearInterval(intervalID);
      theWin = winningNumber();
      console.log(theWin);
      winSound();
    }, 8000);

    theWin = winningNumber();
    spinSound();

  } else {
    alert('Por favor ingrese un rango válido');
  }

});

$('#reiniciar').click(function () {
  $('#magicalnumber').text(0);
});

// to get the winning number
const winningNumber = () => {
  return parseInt($("#magicalnumber").text());
}
