radio.onReceivedNumberDeprecated(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        Rover.MotorStopAll(MotorActions.Stop)
    }
    if (receivedNumber == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        Rover.MotorRunDual(50, 50)
        basic.pause(1000)
        Rover.MotorStopAll(MotorActions.Stop)
    }
    if (receivedNumber == 3) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        Rover.MotorRunDual(-50, -50)
        basic.pause(1000)
        Rover.MotorStopAll(MotorActions.Stop)
    }
    if (receivedNumber == 4) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        Rover.MotorRunDual(0, 50)
        basic.pause(1000)
        Rover.MotorStopAll(MotorActions.Stop)
    }
    if (receivedNumber == 5) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        Rover.MotorRunDual(50, 0)
        basic.pause(1000)
        Rover.MotorStopAll(MotorActions.Stop)
    }
})
// move backward
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    radio.sendNumber(3)
})
// move left
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(4)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
// stop
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    radio.sendNumber(1)
})
// move right
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(5)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
// move forward
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    radio.sendNumber(2)
})
radio.setGroup(1)
