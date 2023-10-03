input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showNumber(input.temperature())
    basic.pause(100)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showString("Hello!")
    basic.pause(100)
})
