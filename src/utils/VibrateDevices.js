const vibrateDevice =(intensities=[50])=>{
    if(window.navigator.vibrate)
        navigator.vibrate(intensities);
}
export default vibrateDevice;