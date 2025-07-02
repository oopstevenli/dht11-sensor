basic.forever(function () {
    OLED.init(128, 64)
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P1,
    true,
    false,
    true
    )
    dht11_dht22.selectTempType(tempType.celsius)
    OLED.writeStringNewLine("Temp: ")
    OLED.writeNumNewLine(dht11_dht22.readData(dataType.temperature))
    OLED.writeStringNewLine("Humidity:")
    OLED.writeNumNewLine(dht11_dht22.readData(dataType.humidity))
    basic.pause(5000)
})
