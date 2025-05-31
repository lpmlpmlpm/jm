// 18comic 去广告脚本 by ChatGPT喵~
(function() {
  'use strict';

  // 观察广告节点并删除
  const observer = new MutationObserver(() => {
    const ads = document.querySelectorAll('.ads, .ad-banner, iframe[src*="ads"], [id*="ad"]');
    ads.forEach(ad => ad.remove());
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // 页面加载时也清理一次
  window.addEventListener('load', () => {
    const ads = document.querySelectorAll('.ads, .ad-banner, iframe[src*="ads"], [id*="ad"]');
    ads.forEach(ad => ad.remove());
  });
})();