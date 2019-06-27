const { run } = require('react-snap');
const { configs } = require('./html-minify');

run({
  crawl: true,
  source: 'dist',
  saveAs: 'html',
  destination: 'dist',
  inlineCss: true,
  cacheAjaxRequests: false,
  skipThirdPartyRequests: true,
  minifyHtml: {
    ...configs,
  },
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36',
});
