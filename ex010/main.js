function actionBtn() {
  const elementoTitle = document.getElementById('title')
  const elementoSentence = document.getElementById('sentence')
  const elementoFormula = document.getElementById('formula')
  const elementoResult = document.getElementById('result')
  document.getElementById('instruction').style.display = 'none'

  const a = parseInt(prompt('Qual é o valor de a?'))
  const b = parseInt(prompt('Qual é o valor de b?'))
  const c = parseInt(prompt('Qual é o valor de c?'))

  elementoTitle.innerHTML = 'Resolvendo Bhaskara'

  elementoSentence.innerHTML =
    'A equação atual é ' + a + 'x² + ' + b + 'x + ' + c + ' = 0'

  elementoFormula.innerHTML =
    'O cálculo realizado será Δ = ' + b + '²' + ' - 4 .' + a + ' . ' + c

  const calc = b * b - 4 * a * c

  elementoResult.innerHTML = 'O valor cálculado foi Δ = ' + calc
}
