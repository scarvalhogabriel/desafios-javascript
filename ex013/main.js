function actionBtn() {
  document.getElementById('instruction').style.display = 'none'

  const name = prompt('Qual é o nome do aluno?')
  const a1 = parseFloat(prompt(`Primeira nota de ${name}`))
  const a2 = parseFloat(prompt(`Segunda nota de ${name}`))

  const elementoTitle = document.getElementById('title')
  elementoTitle.innerHTML = `Analisando a situação de ${name}`

  const media = (a1 + a2) / 2

  const elementoResult = document.getElementById('result')
  elementoResult.innerHTML = `<p>Com as notas ${a1
    .toFixed(2)
    .replace('.', ',')} e ${a2
    .toFixed(2)
    .replace('.', ',')}, a <strong>média é ${media
    .toFixed(2)
    .replace('.', ',')}</strong></p>`

  if (media < 3) {
    elementoResult.innerHTML += `<p>Com a média abaixo de 3,0 o aluno está REPROVADO</p>`
  } else if ( media > 3 && media < 6) {
    elementoResult.innerHTML += `<p>Com a média entre 3,0 e 6,0 o aluno está em RECUPERAÇÃO</p>`
  } else if (media > 6) {
    elementoResult.innerHTML += `<p>Com a média acima de 6,0 o aluno está em APROVADO</p>`
  }
}
