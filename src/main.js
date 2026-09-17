document.addEventListener('DOMContentLoaded', () => {
  // すべてのナビ項目（li）を取得
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
    // その項目の中にある下層メニュー（ul）を探す
    const dropdown = item.querySelector('.nav-dropdown');
    
    // 下層メニューが存在する場合のみ処理する（「ホーム」などには無いため）
    if (dropdown) {
      // マウスが乗ったとき
      item.addEventListener('mouseenter', () => {
        dropdown.classList.add('is-active');
      });

      // マウスが離れたとき
      item.addEventListener('mouseleave', () => {
        dropdown.classList.remove('is-active');
      });
    }
  });
});