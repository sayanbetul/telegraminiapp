import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Telegram WebApp entegrasyonu
    const initData = window.Telegram?.WebApp?.initData || {};
    console.log("Telegram User Data:", initData);

    // Kullanıcı Bilgisi Örneği
    if (window.Telegram?.WebApp?.initDataUnsafe) {
      const user = window.Telegram.WebApp.initDataUnsafe.user;
      console.log("Kullanıcı Bilgisi:", user);
    }
  }, []);

  return (
    <div>
      <h1>Theta Collectibles</h1>
      <button
        onClick={() => window.Telegram.WebApp.close()}
        style={{ padding: "10px", background: "green", color: "white" }}
      >
        Uygulamayı Kapat
      </button>
    </div>
  );
};

export default App;
