function actionBtn() {
  const elementoKelvin = document.getElementById('kelvin')
  const elementoFahrenheit = document.getElementById('fahrenheit')
  const elementoResult = document.getElementById('result')
  document.getElementById('instruction').style.display = 'none'

  const inputTemp = prompt('Digite uma temperatura em °C (Celsius)')
  const temperature = Number(inputTemp)
  const temperaturePtBr = temperature.toLocaleString('pt-BR')

  elementoResult.innerHTML =
    'A temperatura de ' + temperaturePtBr + '°C, corresponde a...'

  const celsiusToKelvin = (temperature + 273.15).toLocaleString('pt-BR')
  elementoKelvin.innerHTML = celsiusToKelvin + ' °K (Kelvin)'

  const celsiusToFahrenheit = ((temperature * 9) / 5 + 32).toLocaleString(
    'pt-BR'
  )
  elementoFahrenheit.innerHTML = celsiusToFahrenheit + ' °F (Fahrenheit)'
}