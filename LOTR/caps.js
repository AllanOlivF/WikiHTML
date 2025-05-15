let tamanhoAtual = 100;

function alterarFonte(incremento) {
  tamanhoAtual += incremento * 10;

  if (tamanhoAtual < 50) tamanhoAtual = 50;
  if (tamanhoAtual > 200) tamanhoAtual = 200;

  document.body.style.fontSize = tamanhoAtual + '%';
}

function alterarFonte(tamanho) {
  const body = document.body;
  let atual = parseFloat(getComputedStyle(body).fontSize);

  if (tamanho === 0) {
    body.style.fontSize = ''; // padrão
  } else {
    body.style.fontSize = (atual + tamanho * 2) + 'px';
  }
}

function alterarLargura(tipo) {
  const content = document.querySelector('.content');
  if (!content) return;

  if (tipo === 'largo') {
    content.style.maxWidth = '1200px';
  } else {
    content.style.maxWidth = '800px';
  }
}

function alterarTema(tipo) {
  const html = document.documentElement;

  html.classList.remove('tema-auto', 'tema-claro', 'tema-noite');

  if (tipo === 'auto') html.classList.add('tema-auto');
  if (tipo === 'claro') html.classList.add('tema-claro');
  if (tipo === 'noite') html.classList.add('tema-noite');
}
