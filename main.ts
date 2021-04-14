enum RadioMessage {
    message1 = 49434
}
radio.onReceivedString(function (receivedString) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
})
let signal = 0
radio.setGroup(1)
servos.P0.setAngle(0)
basic.showIcon(IconNames.Yes)
radio.setTransmitPower(1)
basic.forever(function () {
    if (signal <= 10) {
        servos.P0.setAngle(90)
    } else if (signal <= 11) {
        servos.P0.setAngle(90)
    } else if (signal > 3) {
        servos.P0.setAngle(0)
    } else {
        basic.showString("Something went wrong")
    }
})
