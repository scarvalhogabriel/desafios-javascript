function actionBtn() {
  const elementoTitle = document.getElementById('title')
  const elementoWage = document.getElementById('wage')
  const elementoPercentage = document.getElementById('percentage')
  const elementoResult = document.getElementById('finalResult')

  const name = prompt('Qual é o nome do funcionário?')
  const wageNow = parseFloat(prompt('Qual é o salario de ' + name + '?'))

  const percentage = parseFloat(
    prompt('O salário de ' + name + ' vai ser reajustado em qual porcentagem?')
  )

  const valuePercentage = wageNow * (percentage / 100)

  const finalWage = wageNow + valuePercentage

  elementoTitle.innerHTML = name + ' recebeu um aumento salarial!'

  elementoWage.innerHTML =
    'O salário atual era R$ ' + wageNow.toString().replace('.', ',')

  elementoPercentage.innerHTML =
    'Com um aumento de ' +
    percentage +
    '%, o salário vai aumentar R$ ' +
    valuePercentage.toString().replace('.', ',') +
    ' no próximo mês'

  elementoResult.innerHTML =
    'E a partir daí, ' +
    name +
    ' vai passar a ganhar R$ ' +
    finalWage.toString().replace('.', ',')
}
