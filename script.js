
//beats object
 let beats = {
     "65" : {
         beat: new Beat("music/timer.mp3"),
         button: new Button("aqua",65)
        },
     "83" : {
         beat: new Beat("music/piano.mp3"),
         button: new Button("aqua",83)
        },
     "68" : {
         beat: new Beat("music/drum.mp3"),
         button: new Button("aqua",68)
        },
     "70" : {
         beat: new Beat("music/bass.mp3"),
         button: new Button("#FF00FF",70)
        },
     "71" : {
         beat: new Beat("music/fire.mp3"),
         button: new Button("#FF00FF",71)
        },
     "72" : {
         beat: new Beat("music/sound.mp3"),
         button: new Button("#FF00FF",72)
        },
     "74" : {
         beat: new Beat("music/bass.mp3"),
         button: new Button("#FF00FF",74)
        },
     "75" : {
         beat: new Beat("music/fire.mp3"),
         button: new Button("#FFFFFF",75)
        },
     "76" : {
         beat: new Beat("music/sound.mp3"),
         button: new Button("#FFFFFF",76)
        }
 }

 //making a triggerring function
 triggerBeat = (event) => {
     const keyCode = event.keyCode;
     if(keyCode in beats){
         let keyPress = beats[keyCode];
         keyPress.beat.play();
         keyPress.button.select();
     }
 }
//getting key codes for pressed keys
document.addEventListener("keydown",triggerBeat);
