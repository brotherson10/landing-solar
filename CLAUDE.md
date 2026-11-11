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
| `--red` | `#F42F31` | só detalhe (ponto do eyebrow) |

- Logo: `img/logo-sohard-vetor.png` (original, 1080 px), `img/logo-sohard.webp` (site), `img/logo-sohard-512.png` (JSON-LD).
- Base clara, hero e seção do vídeo em índigo, faixa de CTA em amarelo.
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

- [ ] Validar com a Sohard o texto da seção "Como funciona" (5 etapas, incluindo a homologação com a Equatorial Alagoas)
- [ ] Validar com a Sohard as respostas do FAQ
- [ ] Ficha do Google Maps: não foi reivindicada pela empresa, mostra o telefone fixo (82) 3223-7040 em vez do WhatsApp e não tem site. Reivindicar, trocar o telefone, adicionar o site e fotos
- [ ] Ficha do Maps tem nota 2,7 com 3 avaliações antigas. Pedir avaliações para clientes recentes
- [ ] Números de confiança (anos de mercado, quantidade de instalações), se a Sohard tiver, para uma faixa de prova social
- [ ] Mais fotos reais de obras (a foto de equipe com colete do site antigo parecia banco de imagem e saiu)
- [ ] Enviar o `sitemap.xml` no Google Search Console

## Histórico

- **2026-11-11:** refatoração visual completa (base clara, paleta do logo, novas seções Benefícios, Como funciona, Dúvidas e formulário para WhatsApp), SEO (title, description, canonical, Open Graph, JSON-LD, robots, sitemap), imagens em WebP e vídeo comprimido (de cerca de 7 MB para 2,6 MB), correção do layout da seção de vídeo no celular.
