import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import * as selectors from '@stores/providers/news/selectors';

export const Example = () => {
  const { t } = useTranslation();

  // const fetchNews = useCallback(() => dispatch(actions.fetchItems()), [dispatch]);
  const fetchNews = useCallback(() => null, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const { ui, data } = useSelector(selectors.newsItems);

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ ui, data }) }}
        style={{ padding: '15px', border: '1px solid blue', marginBottom: '20px' }}
      />

      <div>{t('name.label')}</div>
      <div>{t('example')}</div>
    </div>
  );
};
