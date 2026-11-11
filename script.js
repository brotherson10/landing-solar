document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP = '5582996471444';
  const header = document.getElementById('header');
  const toggleBtn = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');
  const reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Menu mobile */
  const fecharMenu = () => {
    navList.classList.remove('active');
    toggleBtn.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.setAttribute('aria-label', 'Abrir menu');
  };

  toggleBtn.addEventListener('click', () => {
    const aberto = navList.classList.toggle('active');
    toggleBtn.classList.toggle('active', aberto);
    toggleBtn.setAttribute('aria-expanded', String(aberto));
    toggleBtn.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });

  navList.querySelectorAll('a').forEach((link) => link.addEventListener('click', fecharMenu));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharMenu();
  });

  /* Sombra no header ao rolar */
  const atualizarHeader = () => header.classList.toggle('scrolled', window.scrollY > 8);
  atualizarHeader();
  window.addEventListener('scroll', atualizarHeader, { passive: true });

  /* Animação de entrada */
  const elementos = document.querySelectorAll('[data-anima]');
  if ('IntersectionObserver' in window && !reduzMovimento) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animado');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    elementos.forEach((el) => observer.observe(el));
  } else {
    elementos.forEach((el) => el.classList.add('animado'));
  }

  /* Vídeo: só carrega e toca quando aparece na tela */
  const video = document.querySelector('.instalacao-video video');
  if (video) {
    if (reduzMovimento || !('IntersectionObserver' in window)) {
      video.controls = true;
    } else {
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().catch(() => {
                video.controls = true;
              });
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.35 }
      ).observe(video);
    }
  }

  /* Formulário: monta a mensagem e abre o WhatsApp */
  const form = document.getElementById('form-orcamento');
  const erro = document.getElementById('form-erro');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const cidade = form.cidade.value.trim();
    const conta = form.conta.value.trim();
    const tipo = form.tipo.value;

    form.nome.setAttribute('aria-invalid', String(!nome));
    form.cidade.setAttribute('aria-invalid', String(!cidade));

    if (!nome || !cidade) {
      erro.hidden = false;
      (!nome ? form.nome : form.cidade).focus();
      return;
    }
    erro.hidden = true;

    let mensagem = `Olá, vim pelo site da Sohard. Meu nome é ${nome}, sou de ${cidade} e tenho interesse em: ${tipo}.`;
    if (conta) mensagem += ` Minha conta de luz fica em média ${conta}.`;

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`, '_blank', 'noopener');
  });

  /* Ano no rodapé */
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
});
