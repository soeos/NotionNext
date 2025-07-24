// 这里编写自定义js脚本；将被静态引入到页面中
console.log('自定义 JS 加载完成');

(function () {
  const script = document.createElement('script');
  script.src = 'https://umami.ors.bio/script.js';
  script.defer = true;
  script.dataset.websiteId = '789b85a4-5038-4796-9d45-6927cc74992c';
  document.body.appendChild(script);
})();

