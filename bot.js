const { Telegraf } = require('telegraf');

const bot = new Telegraf('7139920299:AAHUBVmGuoYZU9VcHBaX_SZQ94-w794Bca0'); // BotFather'dan aldığınız token

// /start komutuyla Mini App bağlantısını gönder
bot.start((ctx) => {
  ctx.reply(
    "Welcome to Theta Collectibles! Open the Magic Link:",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Mini App",
              web_app: { url: "https://thetacollectibles-main.vercel.app/" }, // Web uygulamanızın URL'si
            },
          ],
        ],
      },
    }
  );
});

bot.launch();


