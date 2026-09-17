"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // すべてのナビ項目（li）を取得
  var navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(function (item) {
    // その項目の中にある下層メニュー（ul）を探す
    var dropdown = item.querySelector('.nav-dropdown'); // 下層メニューが存在する場合のみ処理する（「ホーム」などには無いため）

    if (dropdown) {
      // マウスが乗ったとき
      item.addEventListener('mouseenter', function () {
        dropdown.classList.add('is-active');
      }); // マウスが離れたとき

      item.addEventListener('mouseleave', function () {
        dropdown.classList.remove('is-active');
      });
    }
  });
});