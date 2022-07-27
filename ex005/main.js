function actionBtn() {
  const elementoKm = document.getElementById('km')
  const elementoHm = document.getElementById('hm')
  const elementoDam = document.getElementById('dam')
  const elementoDm = document.getElementById('dm')
  const elementoCm = document.getElementById('cm')
  const elementoMm = document.getElementById('mm')
  const elementoResult = document.getElementById('result')
  document.getElementById('instruction').style.display = 'none'

  const inputMeters = prompt('Digite uma distância em metros (m)')

  const meters = Number(inputMeters).toLocaleString('pt-BR')
  elementoResult.innerHTML =
    'A distância de ' + meters + ' metros, corresponde a...'

  const metersToKm = (inputMeters / 1000).toLocaleString('pt-BR')
  elementoKm.innerHTML = metersToKm + ' quilômetros (Km)'

  const metersToHm = (inputMeters / 100).toLocaleString('pt-BR')
  elementoHm.innerHTML = metersToHm + ' hectômetros (Hm)'

  const metersToDam = (inputMeters / 10).toLocaleString('pt-BR')
  elementoDam.innerHTML = metersToDam + ' decâmetros (Dam)'

  const metersToDm = (inputMeters * 10).toLocaleString('pt-BR')
  elementoDm.innerHTML = metersToDm + ' decímetros (dm)'

  const metersToCm = (inputMeters * 100).toLocaleString('pt-BR')
  elementoCm.innerHTML = metersToCm + ' centímetros (cm)'

  const metersToMm = (inputMeters * 1000).toLocaleString('pt-BR')
  elementoMm.innerHTML = metersToMm + ' milímetros (mm)'
}