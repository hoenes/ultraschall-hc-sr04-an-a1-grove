function Ultraschall_Abstand () {
    pins.digitalWritePin(DigitalPin.C16, 0)
    control.waitMicros(4)
    pins.digitalWritePin(DigitalPin.C16, 1)
    control.waitMicros(11)
    pins.digitalWritePin(DigitalPin.C16, 0)
    return Math.round(pins.pulseIn(DigitalPin.C17, PulseValue.High) / 37.9)
}
