basic.forever(function () {
    music.play(music.stringPlayable("G E A D F C G B ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
