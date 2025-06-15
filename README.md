
# 🌟 E-mail Scrap: AstroBoletim

Um projetinho místico que faz scraping do horóscopo de **todos os signos** do site João Bidu e envia por e-mail uma mensagem linda, dividida em "cards" com um toque cósmico e estiloso ✨💜

## 📦 Tecnologias

- Node.js + TypeScript
- Cheerio + Axios (scraping)
- Nodemailer (envio de e-mail)
- dotenv (segurança nas configs)
- HTML estilizado com imagem banner astral 🌌

## 🧙 Funcionalidade

O script faz scraping do horóscopo do dia para todos os signos:
- ♈ Áries até ♓ Peixes

E envia tudo organizadinho por e-mail, com o visual místico já pronto para leitura. Nada genérico! Você pode usar isso como:
- Newsletter astrológica
- Base de automação
- Envio diário programado

## ⚙️ Instalação

```bash
npm install
```

## 📂 Arquivos principais

- `src/services/scraper.ts` — coleta os dados dos 12 signos do site João Bidu
- `src/services/emailSender.ts` — envia o e-mail com as previsões do dia
- `src/templates/emailTemplate.ts` — gera o HTML estilizado com banner e cards

## 🔐 Configuração do .env

Crie um arquivo `.env` com o seguinte formato:

```env
EMAIL_FROM=seuemail@gmail.com
EMAIL_TO=destino@gmail.com
EMAIL_PASS=senhaDeApp
```

> Use uma senha de app do Gmail! [Como gerar](https://myaccount.google.com/apppasswords)

## 🚀 Executar

```bash
npm start
```

Isso vai rodar o script, pegar todos os signos e mandar um e-mail lindo e pronto pra leitura 😍

---

## 💡 Dica Extra

Você pode programar esse script com `node-cron` pra ser executado automaticamente todos os dias e transformar isso numa newsletter diária astrológica 🌠

---

Projeto criado por Pérola 💜
