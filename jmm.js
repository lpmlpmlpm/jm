// 超狠 JM 去广告脚本 by 喵仆
let body = $response.body;

// 删除所有 iframe、frame 广告标签
body = body.replace(/<(iframe|frame)[^>]*?>[\s\S]*?<\/\1>/gi, '');

// 移除所有广告相关 script（关键词式轰炸）
body = body.replace(/<script[^>]*?(adsbygoogle|googlesyndication|adservice|doubleclick|ad|banner)[^>]*?>[\s\S]*?<\/script>/gi, '');

// 干掉内嵌 JSON 里的广告字段
body = body.replace(/"ads?"\s*:\s*\[[\s\S]*?\]/gi, '');

// 去除可能注入广告用的 noscript 标签
body = body.replace(/<noscript[^>]*?>[\s\S]*?<\/noscript>/gi, '');

// 杀掉页面中 suspicious 的 div 和 span 标签
body = body.replace(/<(div|span)[^>]*?(ad-|adsense|adcontainer|banner|google)[^>]*?>[\s\S]*?<\/\1>/gi, '');

// 删除常见弹窗类广告容器（比如 popup、layer 等）
body = body.replace(/<(div|section)[^>]*?(popup|float|layer|advert)[^>]*?>[\s\S]*?<\/\1>/gi, '');

// 保命符，防止空页面
body = body || '<html><body>喵！页面被净化啦~</body></html>';

$done({ body });