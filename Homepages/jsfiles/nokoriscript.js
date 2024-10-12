    // 目標日時をセットする
    const targetDate = new Date('2025-01-01T00:00:00').getTime();

    function updateCountdown() {
      // 現在の日時を取得
      const now = new Date().getTime();
      
      // 残り時間を計算
      const timeLeft = targetDate - now;

      // 残り時間を日、時間、分、秒に変換
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      // 結果を表示
      document.getElementById("countdown").innerHTML = `${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;
    }

    // 1秒ごとに残り時間を更新
    setInterval(updateCountdown, 1000);

    // 最初の表示を行う
    updateCountdown();