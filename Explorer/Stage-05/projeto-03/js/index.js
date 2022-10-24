import Sounds from "./sounds.js"
import Controls from "./controls.js"
import Timer from "./timer.js"
import Events from "./events.js"
import {
    buttonPause,
    buttonPlay,
    buttonStop,
    buttonSet,
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

Events({controls, timer, sound})