function 原地右转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    150,
    makerobo.Motors.Right,
    -150
    )
}
function 原地左转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    -150,
    makerobo.Motors.Right,
    150
    )
}
function 右转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    150,
    makerobo.Motors.Right,
    0
    )
}
function 左转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    0,
    makerobo.Motors.Right,
    150
    )
}
function 后退 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    -150,
    makerobo.Motors.Right,
    -150
    )
}
function 前进 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    100,
    makerobo.Motors.Right,
    100
    )
}
function 停止 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    0,
    makerobo.Motors.Right,
    0
    )
}
let 右侧循迹传感器 = 0
let 左侧循迹传感器 = 0
TM1650.showNumber(100)
basic.showIcon(IconNames.Happy)
while (!(input.buttonIsPressed(Button.A))) {
    停止()
}
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    左侧循迹传感器 = pins.digitalReadPin(DigitalPin.P1)
    右侧循迹传感器 = pins.digitalReadPin(DigitalPin.P2)
    if (左侧循迹传感器 == 1 && 右侧循迹传感器 == 1) {
        前进()
    } else if (左侧循迹传感器 == 1 && 右侧循迹传感器 == 0) {
        左转()
    } else if (左侧循迹传感器 == 0 && 右侧循迹传感器 == 1) {
        右转()
    } else {
        停止()
    }
})
