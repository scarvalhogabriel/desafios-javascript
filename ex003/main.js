function actionBtn() {
  let inputNumber = prompt('Digite um valor interior qualquer')

  let number = Number(inputNumber)

  let previousNumber = number - 1
  let nextNumber = number + 1

  alert(
    'Antes de ' +
      inputNumber +
      ', temos o número ' +
      previousNumber +
      '.\n' +
      'Depois de ' +
      inputNumber +
      ', temos o número ' +
      nextNumber +
      '.'
  )
}