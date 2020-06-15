let beats = {
    "81": {
        beat: new Beat("./assets/Piano Chord 331.mp3"),
        button: new Button("rosybrown", 81),
    },
    "65": {
        beat: new Beat("./assets/Piano Chord 209.mp3"),
        button: new Button("rosybrown", 65),
    },
    "90": {
        beat: new Beat("./assets/Piano Chord 208.mp3"),
        button: new Button("rosybrown", 90),
    },
    "88": {
        beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
        button: new Button("rosybrown", 88),
    },
    "83": {
        beat: new Beat("./assets/Drum Snare Roll.mp3"),
        button: new Button("magenta", 83),
    },
    "87": {
        beat: new Beat("./assets/PREL Musical 57.mp3"),
        button: new Button("rosybrown", 87),
    },
    "69": {
        beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
        button: new Button("rosybrown", 69),
    },
    "68": {
        beat: new Beat("./assets/Musical Compos 33.mp3"),
        button: new Button("rosybrown", 68),
    },
    "67": {
        beat: new Beat("./assets/Musical Orches 4.mp3"),
        button: new Button("rosybrown", 67),
    }
}


// Function to play the beat upon a press of key
triggerBeat = (event) => {
    const keyCode = event.keyCode;
    const keyPressed = beats[keyCode];
    keyPressed.beat.play();
    keyPressed.button.select();
}


// Keydown listener to fire triggerBeat function
document.addEventListener('keydown', triggerBeat);