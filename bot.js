
const { Telegraf } = require('telegraf');
const express = require('express');
const app = express();

const bot = new Telegraf('7139920299:AAHUBVmGuoYZU9VcHBaX_SZQ94-w794Bca0'); // BotFather'dan aldığınız token

const HOST = 'https://your-render-app-url.onrender.com'; // Render uygulamanızın URL'sini burada belirtin

// Telegram Webhook'u ayarlayın
bot.telegram.setWebhook(`${HOST}/bot${bot.token}`);

// Webhook callback endpoint
app.use(bot.webhookCallback(`/bot${bot.token}`));

app.get('/', (req, res) => {
  res.send('Telegram bot is running!');
});

const PORT = process.env.PORT || 3000; // Uygulamanızın çalışacağı port
app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});
