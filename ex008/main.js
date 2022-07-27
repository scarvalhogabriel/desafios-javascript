function actionBtn() {
  const elementoTitle = document.getElementById('title')
  const elementoPrice = document.getElementById('price')
  const elementoDiscount = document.getElementById('discount')
  const elementoResult = document.getElementById('result')
  document.getElementById('instruction').style.display = 'none'

  const product = prompt('Qual produto você está comprando?')
  const price = parseFloat(prompt('Qual é o preco de ' + product + '?'))

  const discount = (price * 0.1).toFixed(2)

  const finalPrice = price - discount

  elementoTitle.innerHTML = 'Calculando desconto 10% para ' + product
  elementoPrice.innerHTML =
    'O preço original era R$ ' + price.toString().replace('.', ',') + '.'
  elementoDiscount.innerHTML =
    'Você acaba de ganhar R$ ' +
    discount.replace('.', ',') +
    ' de desconto (-10%).'
  elementoResult.innerHTML =
    'No fim, você vai pagar R$ ' +
    finalPrice.toString().replace('.', ',') +
    ' no produto ' +
    product +
    '.'
}
