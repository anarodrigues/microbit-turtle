radio.onReceivedNumberDeprecated(function (receivedNumber) {
    if (receivedNumber == 1) {
        Rover.MotorStopAll(MotorActions.Stop)
        basic.showString("STOP")
    }
    if (receivedNumber == 2) {
        basic.showString("R")
        Rover.MotorRunDual(0, 50)
        basic.pause(1000)
        Rover.MotorStopAll(MotorActions.Stop)
    }
    if (receivedNumber == 3) {
        basic.showString("L")
        Rover.MotorRunDual(50, 0)
        basic.pause(1000)
        Rover.MotorStopAll(MotorActions.Stop)
    }
    if (receivedNumber == 4) {
        basic.showString("BACKWARD")
        Rover.MotorRunDual(-50, -50)
        basic.pause(1000)
        Rover.MotorStopAll(MotorActions.Stop)
    }
    if (receivedNumber == 5) {
        basic.showString("FORWARD")
        Rover.MotorRunDual(50, 50)
        basic.pause(1000)
        Rover.MotorStopAll(MotorActions.Stop)
    }
})
// move forward
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(1)
})
// move left
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(2)
})
// stop
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(5)
})
// move right
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(3)
})
// move backward
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(4)
})
radio.setGroup(1)
