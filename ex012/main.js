function actionBtn() {
  document.getElementById('instruction').style.display = 'none'
  const result = document.getElementById('results')

  const valueBefore = parseFloat(
    prompt('Qual era o preço anterior do produto?')
  )
  const valueAfter = parseFloat(prompt('Qual é o preço atual do produto?'))

  const elementoTitle = document.getElementById('title')
  elementoTitle.innerHTML = `Analisando os valores informados`

  result.innerHTML = `<p>O produto custava R$ ${valueBefore
    .toFixed(2)
    .replace('.', ',')} e agora custa R$ ${valueAfter
    .toFixed(2)
    .replace('.', ',')}. </p>`

  if (valueAfter > valueBefore) {
    result.innerHTML += `<p> Hoje o produto está mais caro. </p>`

    let dif = valueAfter - valueBefore
    result.innerHTML += `<p> O preço subiu R$ ${dif
      .toFixed(2)
      .replace('.', ',')} em relação ao preço anterior. </p>`

    let percent = (dif / valueBefore) * 100
    result.innerHTML += `<p> Uma variação de ${percent
      .toFixed(2)
      .replace('.', ',')}% pra cima. </p>`
  } else {
    result.innerHTML += `<p> Hoje o produto está mais barato. </p>`

    let dif = valueBefore - valueAfter
    result.innerHTML += `<p> O preço caiu R$ ${dif
      .toFixed(2)
      .replace('.', ',')} em relação ao preço anterior. </p>`

    let percent = (dif / valueAfter) * 100
    result.innerHTML += `<p> Uma variação de ${percent
      .toFixed(2)
      .replace('.', ',')}% pra cima. </p>`
  }
}
