# Sohard Energia Solar: landing page

Site de cliente do Brotherson. A marca, a voz e os dados são da Sohard. Nunca aplicar a identidade de `identidade/` da raiz do workspace.

## Cliente

- **Empresa:** Sohard Energia Solar
- **Serviços:** energia solar residencial, empresarial e rural, usinas de investimento, limpeza e manutenção, carregadores para veículos elétricos
- **Endereço:** Rua Comendador Firmo Lopes, 41, Farol, Maceió - AL, 57050-030
- **WhatsApp (único telefone do site):** (82) 99647-1444 → `https://wa.me/5582996471444`
- **Horário:** segunda a sexta, das 8h às 17h
- **Instagram:** @sohard_energiasolar
- **Área atendida:** Maceió e interior de Alagoas
- **Google Maps:** https://maps.google.com/?cid=3675984637933943429 (coordenadas -9.6478135, -35.7331948)
- **E-mail:** não tem

Endereço, WhatsApp e horário têm de ser idênticos no texto, no rodapé, nos links e no JSON-LD.

## Stack e deploy

- HTML, CSS e JS puros (`index.html`, `styles.css`, `script.js`). Sem framework, sem build.
- Fonte: Plus Jakarta Sans (Google Fonts).
- Deploy: Netlify, domínio `https://sohard-energiasolar.com.br/` (o `www` redireciona). Repositório: `github.com/brotherson10/landing-solar`. O push na `main` publica o site.
- Local: `python -m http.server 5501` na pasta do projeto.

## Identidade (tirada do logo)

| Token | Cor | Uso |
|---|---|---|
| `--sun` | `#FEC526` | botões principais, destaques |
| `--indigo` | `#423E95` | títulos de marca, ícones, blocos escuros (`--indigo-900` `#1B1946`) |
| `--red` | `#F42F31` | reservado (hoje só no erro do formulário). O cliente não quis o ponto vermelho nos eyebrows |

- Logo: `img/logo-sohard-vetor.png` (original, 1080 px), `img/logo-sohard.webp` (site), `img/logo-sohard-512.png` (JSON-LD).
- Hero com a foto da instalação de fundo (recorte focado nas placas: `img/hero-fundo-instalacao.webp` no desktop, `img/hero-fundo-mobile.webp` até 960 px). Hero na altura cheia (até 760 px), só com eyebrow, h1, texto e botões e degradê índigo: da esquerda para a direita no desktop, de cima para baixo no celular.
- Base clara, hero, seção do vídeo e contato em índigo, faixa de CTA em amarelo, rodapé claro com o logo solto (sem fundo).
- Títulos moderados (h1 até 3,25rem, h2 até 2,25rem) com `text-wrap: balance`.
- Idioma: `pt-BR`. Nunca usar travessão no texto do site.

## Estrutura da página

Hero → benefícios → serviços → como funciona → vídeo → projetos → faixa CTA → dúvidas (FAQ) → contato (formulário que abre o WhatsApp + mapa) → rodapé. Botão flutuante de WhatsApp.

## SEO

- `title`, `meta description`, `canonical`, Open Graph e Twitter card (imagem `img/og-sohard.jpg`, 1200×630).
- JSON-LD `LocalBusiness` e `FAQPage` no `<head>`. Se mudar uma pergunta do FAQ, mudar nos dois lugares.
- `robots.txt` e `sitemap.xml` (atualizar `lastmod` quando mudar o conteúdo).
- Imagens em WebP com `width`/`height` e `loading="lazy"` abaixo da dobra.

## Dados dos projetos

Os números (kWh/mês e R$/ano) são médias estimadas a partir dos dados de cada cliente, informadas pela Sohard. O site mostra a nota "Valores médios estimados".

## Pendências

- [x] Texto da seção "Como funciona" validado pela Sohard
- [x] Respostas do FAQ validadas pela Sohard
- [ ] Ficha do Google Maps: não foi reivindicada pela empresa, mostra o telefone fixo (82) 3223-7040 em vez do WhatsApp e não tem site. Reivindicar, trocar o telefone, adicionar o site e fotos
- [ ] Ficha do Maps tem nota 2,7 com 3 avaliações antigas. Pedir avaliações para clientes recentes
- [ ] Números de confiança (anos de mercado, quantidade de instalações), se a Sohard tiver, para uma faixa de prova social
- [ ] Mais fotos reais de obras (a foto de equipe com colete do site antigo parecia banco de imagem e saiu)
- [ ] Search Console: tag de verificação já no `<head>`. Falta clicar em Verificar e enviar o `sitemap.xml`

## Histórico

- **2026-11-11:** refatoração visual completa (base clara, paleta do logo, novas seções Benefícios, Como funciona, Dúvidas e formulário para WhatsApp), SEO (title, description, canonical, Open Graph, JSON-LD, robots, sitemap), imagens em WebP e vídeo comprimido (de cerca de 7 MB para 2,6 MB), correção do layout da seção de vídeo no celular.
- **2026-11-11:** sem ponto vermelho nos eyebrows, h1 e h2 menores, contato em fundo escuro e rodapé claro (troca), logo do rodapé sem caixa.
- **2026-11-11:** hero com a foto como fundo e degradê, no lugar da foto em moldura.
- **2026-11-11:** hero mais baixo com recorte focado nas placas, h1 menor, sem o cartão e sem a linha de localização e horário.
- **2026-11-11:** troca de fotos: o hero passou a usar a foto do instalador nas placas (original `projeto-residencial-grande.jpg`) e o card "Residência na Barra Nova" passou a usar a foto do telhado com a construção branca (original `projeto-residencial-menor.jpg`). Fotos validadas pela Sohard.
- **2026-11-11:** hero voltou à altura cheia com a foto do instalador (recorte sem o topo); no celular a foto foi enquadrada para o instalador aparecer.
- **2026-11-11:** publicado (push). Depois: h1 de volta a 3,25rem e recorte do hero mostrando mais a parte de cima (rua e casas). Como funciona, FAQ e fotos validados pela Sohard.
