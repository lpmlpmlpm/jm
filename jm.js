// ==UserScript==
// @name         JM去广告脚本
// @namespace    https://18comic.vip
// @version      1.0
// @description  屏蔽JM站内广告
// @match        *://18comic.vip/*
// @match        *://18comic.org/*
// @match        *://jmcomic.me/*
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';

  const adSelectors = [
    'iframe[src*="ads"]',
    'div[class*="ads"]',
    'div[id*="ads"]',
    'div[class*="banner"]',
    'div[id*="banner"]',
    'div[class*="pop"]',
    'div[id*="pop"]',
    'div[class*="modal"]',
    'div[id*="modal"]',
    'script[src*="ads"]',
    'script[src*="pop"]',
    'a[target="_blank"]',
  ];

  function removeAds() {
    adSelectors.forEach(selector => {
      const ads = document.querySelectorAll(selector);
      ads.forEach(ad => ad.remove());
    });
  }

  const observer = new MutationObserver(removeAds);
  observer.observe(document.body, { childList: true, subtree: true });

  removeAds();
})();