# 💌 Pesquisa de Satisfação: Marido

Uma cartinha animada, fofa e engraçada para a esposa avaliar o marido. Spoiler: **só dá pra dar feedback positivo** 😇
(Visual inspirado no reel *"Proposal Letter CSS"* do **@code_wars_official**.)

- Um envelope kawaii com **selo de coração sorridente** flutua num céu noturno cheio de estrelinhas e coraçõezinhos.
- Ao tocar/clicar, o selo dá um “pop”, a aba abre e a **carta sobe** do envelope com a pesquisa (barra de progresso “Pergunta X de 6”):
  1. **⭐ Como você avalia seu marido?** Clicar em 1–4 estrelas faz a estrelinha cair e a nota é corrigida para 5 (“Ops, acho que você quis dizer 5 ⭐”). Com mouse, as estrelas 1–4 fogem assustadas.
  2. **💗 Nível de amor:** o slider não desce. Tentou diminuir? Ele volta sozinho para 100%. O botão “Mais amor ➕” passa de 120% até **∞ Infinito**.
  3. **😍 O que você mais gosta nele?** Só opções positivas + “Tudo acima ✨”. A opção “Nada 🙄” foge do cursor/dedo.
  4. **😤 Recomendaria seu marido?** “Não, ele é só meu 😤” é a resposta correta; o “Sim” foge e ativa o modo ciúmes.
  5. **💍 Renovar contrato por quantos anos?** Para sempre / Infinito / Nesta e nas próximas vidas — e o “0 anos” foge.
  6. **💬 Comentário (opcional)** com o botão “Sugestões ✨”, que insere elogios prontos.
- No fim: confete de corações e estrelas, **“Obrigado pelo seu feedback! ❤️”** e um **comprovante** com nota ⭐⭐⭐⭐⭐ (5.0), carimbo “APROVADO” e “Marido aprovado com nota máxima”. Dá pra avaliar de novo.

Feito com **Vite + HTML/CSS/JS puro** (sem frameworks).

## ▶️ Como rodar

Pré-requisito: [Node.js](https://nodejs.org/) 20.19+ (ou 22+).

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (ex.: `http://localhost:5173`).
O `dev` já roda com `--host`, então dá pra testar **no celular** pela mesma rede Wi‑Fi usando o endereço “Network” (ex.: `http://192.168.0.10:5173`).

### Build de produção

```bash
npm run build     # gera a pasta dist/
npm run preview   # serve o dist/ localmente (também com --host)
```

## ✏️ Personalizando

Todos os textos ficam no topo de `src/main.js`:

```js
const HUSBAND_NAME = 'Marcos';   // o "produto" avaliado 😄
const WIFE_NAME = 'meu amor';    // como você chama a sua esposa

const TEXTS = {
  surveyTitle: 'Pesquisa de Satisfação',
  stars:     { question: 'Como você avalia seu marido?', fixes: [...] },
  love:      { question: 'Nível de amor', snaps: [...], moreLevels: [...] },
  likes:     { options: ['O abraço 🤗', ...], all: 'Tudo acima ✨', nothing: 'Nada 🙄' },
  recommend: { mine: 'Não, ele é só meu 😤', jealous: [...] },
  renew:     { options: ['Para sempre 💍', ...], zero: '0 anos' },
  comment:   { suggestions: ['Melhor marido do mundo! 🌎', ...] },
  success:   { title: 'Obrigado pelo seu feedback! ❤️', approved: 'Marido aprovado com nota máxima', ... },
};
```

Dá pra trocar perguntas, opções (as do “O que mais gosta” e “Renovar contrato” podem ter quantos itens quiser), mensagens engraçadas e o texto do comprovante.
As cores ficam nas variáveis CSS no topo de `src/style.css` (`--pink-*`, `--red-*`, `--night-*`).

## 🚀 Deploy na Vercel

**Opção 1 — pelo site**
1. Suba o projeto para um repositório no GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. A Vercel detecta o Vite automaticamente (Build Command: `npm run build`, Output Directory: `dist`). Clique em **Deploy**.

**Opção 2 — pela CLI**
```bash
npm i -g vercel
vercel          # preview
vercel --prod   # produção
```

Também funciona em qualquer hospedagem estática (Netlify, GitHub Pages, Cloudflare Pages…) — é só publicar a pasta `dist/`.

## ♿ Acessibilidade

- Envelope, estrelas, opções e botões são `<button>` de verdade, acessíveis pelo teclado (Tab + Enter/Espaço); o slider aceita as setas.
- Só a etapa atual da pesquisa fica acessível (as outras ficam `inert`); ao avançar, o foco vai para a pergunta nova.
- Os botões que fogem também fogem pelo teclado (mantendo o foco), e as mensagens engraçadas são anunciadas via `aria-live`.
- Com **`prefers-reduced-motion`** ativado, as animações viram transições instantâneas, os corações do fundo ficam parados e não há confete.

## 📁 Estrutura

```
├── index.html          # envelope, carta e tela de comemoração
├── public/favicon.svg  # coraçãozinho sorridente
├── src/main.js         # textos personalizáveis + etapas da pesquisa + interações
└── src/style.css       # visual e animações
```

Feito com 💖
