const { run } = require('react-snap');
const { configs } = require('./html-minify');

const { distName } = require('../options');

run({
  crawl: true,
  source: distName,
  saveAs: 'html',
  destination: distName,
  inlineCss: false,
  puppeteerArgs: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--unhandled-rejections=strict',
  ],
  externalServer: false,
  cacheAjaxRequests: false,
  skipThirdPartyRequests: true,
  skipThirdPartyRequestsExcept: true,
  puppeteerIgnoreHTTPSErrors: true,
  minifyHtml: {
    ...configs,
  },
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36',
});
