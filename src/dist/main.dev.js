"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(function (item) {
    // 診療案内などの「.nav-dropdown」または「.nav-accordion-content」を取得
    var dropdown = item.querySelector('.nav-dropdown') || item.querySelector('.nav-accordion-content');
    var link = item.querySelector('.nav-link-item');

    if (dropdown) {
      /* ==========================================
         1. パソコン用の動き（画面幅 769px 以上）
         ========================================== */
      item.addEventListener('mouseenter', function () {
        if (window.innerWidth > 768) {
          dropdown.classList.add('is-active');
        }
      });
      item.addEventListener('mouseleave', function () {
        if (window.innerWidth > 768) {
          dropdown.classList.remove('is-active');
        }
      });
      /* ==========================================
         2. スマホ用の動き（画面幅 768px 以下）
         ========================================== */

      if (link) {
        link.addEventListener('click', function (e) {
          if (window.innerWidth <= 768) {
            // リンクのページ遷移を一旦止めて、アコーディオンを開閉させる
            e.preventDefault();
            dropdown.classList.toggle('is-active');
          }
        });
      }
    }
  });
});