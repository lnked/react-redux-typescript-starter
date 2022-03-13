import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { Html5Qrcode } from 'html5-qrcode';

export const Example = () => {
  // const dispatch = useDispatch();
  // const { t } = useTranslation();

  // const fetchNews = useCallback(() => dispatch(actions.fetchItems()), [dispatch]);

  // useEffect(() => {
  //   fetchNews();
  // }, [fetchNews]);

  // const { ui, data } = useSelector(selectors.newsItems);

  const resultContainer = document.getElementById('qr-reader-results');

  let lastResult = 0;
  let countResults = 0;

  function onScanSuccess(decodedText: any, decodedResult: any) {
    if (decodedText !== lastResult) {
      ++countResults;
      lastResult = decodedText;
      // Handle on success condition with the decoded message.
      console.log(`Scan result ${decodedText}`, decodedResult);
    }
  }

  const html5QrcodeScanner = new Html5QrcodeScanner('qr-reader', { fps: 10, qrbox: 250 });

  html5QrcodeScanner.render(onScanSuccess);

  // return (
  //   <div>
  //     <div
  //       dangerouslySetInnerHTML={{ __html: JSON.stringify({ ui, data }) }}
  //       style={{ padding: '15px', border: '1px solid blue', marginBottom: '20px' }}
  //     />

  //     <div>{t('name.label')}</div>
  //     <div>{t('example')}</div>
  //   </div>
  // );
};
