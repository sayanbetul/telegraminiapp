const { Telegraf } = require('telegraf');

const bot = new Telegraf('7139920299:AAHUBVmGuoYZU9VcHBaX_SZQ94-w794Bca0'); // BotFather'dan aldığınız token

// /start komutuyla Mini App bağlantısını gönder
bot.start((ctx) => {
  ctx.reply(
    "Theta Collectibles'a hoş geldiniz! Mini App'i açmak için aşağıdaki linke tıklayın:",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Mini App'i Aç",
              web_app: { url: "https://thetacollectibles-main.vercel.app/" }, // Web uygulamanızın URL'si
            },
          ],
        ],
      },
    }
  );
});

bot.launch();
