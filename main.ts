input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello!")
    basic.pause(100)
})
