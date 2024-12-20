function calcularMedia() {
  // Obtém os valores dos inputs e arredonda para 1 casa decimal
  const nota1 = Math.round((parseFloat(document.getElementById('nota1').value) || 0) * 10) / 10;
  const nota2 = Math.round((parseFloat(document.getElementById('nota2').value) || 0) * 10) / 10;
  const nota3 = Math.round((parseFloat(document.getElementById('nota3').value) || 0) * 10) / 10;
  const nota4 = Math.round((parseFloat(document.getElementById('nota4').value) || 0) * 10) / 10;

  // Verifica se todas as notas estão no intervalo de 0 a 10
  if (
    nota1 < 0 || nota1 > 10 || 
    nota2 < 0 || nota2 > 10 || 
    nota3 < 0 || nota3 > 10 || 
    nota4 < 0 || nota4 > 10
  ) {
    document.getElementById('resultado').innerText = 'Por favor, insira notas entre 0 e 10.';
    return;
  }

  // Soma as notas e calcula a média logo após a soma
  const soma = nota1 + nota2 + nota3 + nota4;
  const media = Math.round((soma / 4) * 10) / 10;

  // Determina se o aluno foi aprovado ou reprovado
  const status = media >= 7 ? 'Aprovado' : 'Reprovado';

  // Exibe o resultado
  document.getElementById('resultado').innerText = 
    `A soma das notas é: ${soma.toFixed(1)}\n` +
    `A média das notas é: ${media.toFixed(1)}\n` +
    `Status: ${status}`;
}
