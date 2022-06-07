import Sounds from "./sounds.js"
import Controls from "./controls.js"
import Timer from "./timer.js"
import {
    buttonPause,
    buttonPlay,
    buttonStop,
    buttonSet,
    buttonSoundOn,
    buttonSoundOff,
    minutesDisplay,
    secondsDisplay
} from "./elements.js"

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

const sound = Sounds()

// Event-driven
// programação imperativa
// callback
buttonPlay.addEventListener('click', function () {

    controls.play()
    timer.countdown()
    sound.pressButton()
})

buttonPause.addEventListener('click', function () {

    controls.pause()
    timer.hold()
    sound.pressButton()
})

buttonStop.addEventListener('click', function () {

    controls.reset()
    timer.reset()
    sound.pressButton()
})

buttonSoundOff.addEventListener('click', function () {

    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sound.bgAudio.pause()
})

buttonSoundOn.addEventListener('click', function () {

    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgAudio.play()
})

buttonSet.addEventListener('click', function () {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
        timer.reset()
        return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(minutes)

})