function actionBtn() {
  const elementoTitle = document.getElementById('title')
  const elementoResult = document.getElementById('result')

  document.getElementById('instruction').style.display = 'none'

  const year = parseInt(prompt('Qual é o ano que você quer verificar?'))
  console.log

  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    elementoResult.innerHTML = `O ano de ${year} <strong style='color:green; background-color:rgba(0, 132, 0, 0.3'>É BISSEXTO</strong> ✅`
  } else {
    elementoResult.innerHTML = `O ano de ${year} <strong style='color:rgba(114, 47, 55, 1); background-color:rgba(114, 47, 55, 0.3);'>NÃO É BISSEXTO</strong> ❌`
  }

  elementoTitle.innerHTML = `Analisando do ano de ${year}...`
}
