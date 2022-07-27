function actionBtn() {
  let product = prompt('Qual produto você está comprando?')

  let inputPrice = prompt(
    'Quanto custa ' + product + ' que você está comprando?'
  )
  let price = Number(inputPrice).toFixed(2)

  let inputMoney = prompt(
    'Qual foi o valor que você deu para pagar ' + product + '?'
  )
  let money = Number(inputMoney).toFixed(2)

  let change = (money - price).toFixed(2)

  alert(
    'Você comprou ' +
      product +
      ' que custou R$ ' +
      price +
      '.\n' +
      'Deu R$ ' +
      money +
      ' em dinheiro e vai receber R$ ' +
      change +
      ' de troco.\n' +
      'Volte sempre!'
  )
}