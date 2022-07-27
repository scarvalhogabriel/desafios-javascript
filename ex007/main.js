const dolarToday = prompt(
  'Antes de mais nada. Quanto está a cotação do dólar hoje?'
)

function actionBtn() {
  const elementoResult = document.getElementById('result')
  document.getElementById('instruction').style.display = 'none'

  const reais = prompt('Quantos R$ você tem na carteira?')

  const convert = reais / dolarToday

  elementoResult.innerHTML =
    'Com R$ ' + reais + ' você pode comprar US$ ' + convert
}
