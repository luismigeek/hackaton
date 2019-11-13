// Loads the audio sound in to an audio object.
var audio = new Audio('sounds/tick.mp3');
var final = new Audio('sounds/winsound.mp3');
var available = [0, 0, 0, 0, 0, 0, 0];

// Create new wheel object specifying the parameters at creation time.
var theWheel = new Winwheel({
    'numSegments': 7,                       // Specify number of segments.
    'outerRadius': 200,                     // Set outer radius so wheel fits inside the background.
    'drawMode': 'segmentImage',             // Must be segmentImage to draw wheel using one image per segemnt.
    'segments':                             // Define segments including image and text.
        [
            { 'image': 'images/parts/01.png', 'text': 'INDUSTRIA,\nINFRAESTRUCTURA\nE\nINNOVACIÓN' },
            { 'image': 'images/parts/02.png', 'text': 'PAZ,\nJUSTICIA,\nEQUIDAD\nY\nSEGURIDAD' },
            { 'image': 'images/parts/03.png', 'text': 'CIUDAD\nVERDE\nY\nSOSTENIBLE' },
            { 'image': 'images/parts/04.png', 'text': 'COMODÍN' },
            { 'image': 'images/parts/05.png', 'text': 'INCLUSIÓN' },
            { 'image': 'images/parts/06.png', 'text': 'SALUD\nY\nBIENESTAR' },
            { 'image': 'images/parts/07.png', 'text': 'EDUCACIÓN\nDE\nCALIDAD' }
        ],
    'animation':                            // Specify the animation to use.
    {
        'type': 'spinToStop',
        'duration': 5,                      // Duration in seconds.
        'spins': 10,                        // Number of complete spins.
        'callbackAfter': 'draw()',
        'callbackFinished': alertPrize,
        'callbackSound': playSound,         // Called when the tick sound is to be played.
        'soundTrigger': 'segment'           // Specify pins are to trigger the sound.            
    }
});

$(document).keydown(function (evt) {
    if (evt.keyCode == 32) {
        startSpin();
    }
});

// This function is called when the sound is to be played.
function playSound() {
    // Stop and rewind the sound if it already happens to be playing.
    audio.pause();
    audio.currentTime = 0;

    // Play the sound.
    audio.play();
}

// This function is called when the sound is to be played.
function finalSound() {
    // Stop and rewind the sound if it already happens to be playing.
    final.pause();
    final.currentTime = 0;

    // Play the sound.
    final.play();
}

// -------------------------------------------------------
// Click handler for spin button.
// -------------------------------------------------------
function startSpin() {
    theWheel.startAnimation();
}

function restart() {
    theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
    theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
    theWheel.draw();                // Call draw to render changes to the wheel.
    draw();
}

// -------------------------------------------------------
// Called when the spin animation has finished by the callback feature of the wheel because I specified callback in the parameters.
// note the indicated segment is passed in as a parmeter as 99% of the time you will want to know this to inform the user of their prize.
// -------------------------------------------------------
function alertPrize(indicatedSegment) {

    let index = theWheel.getIndicatedSegmentNumber();

    if (available[index - 1] === 4) {
        restart();
        theWheel.startAnimation();
    } else {

        available.splice(index - 1, 1, available[index - 1] + 1);
        console.log(available);

        switch (index) {
            case 1:
                if (available[index - 1] === 4) {
                    theWheel.segments[index].changeImage('images/parts/011.png', imageDirection = null);
                }
                break;

            case 2:
                if (available[index - 1] === 4) {
                    theWheel.segments[index].changeImage('images/parts/021.png', imageDirection = null);
                }
                break;
            case 3:
                if (available[index - 1] === 4) {
                    theWheel.segments[index].changeImage('images/parts/031.png', imageDirection = null);
                }
                break;
            case 4:
                if (available[index - 1] === 4) {
                    theWheel.segments[index].changeImage('images/parts/041.png', imageDirection = null);
                }
                break;
            case 5:
                if (available[index - 1] === 4) {
                    theWheel.segments[index].changeImage('images/parts/051.png', imageDirection = null);
                }
                break;
            case 6:
                if (available[index - 1] === 4) {
                    theWheel.segments[index].changeImage('images/parts/061.png', imageDirection = null);
                }
                break;
            case 7:
                if (available[index - 1] === 4) {
                    theWheel.segments[index].changeImage('images/parts/071.png', imageDirection = null);
                }
                break;
            default:
                break;
        }

        finalSound();

        Swal.fire({
            imageUrl: "images/brands/hackathon.png",
            imageWidth: 225,
            imageHeight: 75,
            html: '<h1 class="text-category"> ¡' + indicatedSegment.text + '!</h1>',
            focusConfirm: false,
            confirmButtonText: "Continuar",
            customClass: 'swal-wide'
        }).then((result) => {
            restart();
        });
    }
};

function draw() {
    let image = document.getElementById('source');
    var ctx = theWheel.ctx;
    ctx.drawImage(image, 215, 200);
}
