import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import * as actions from '@stores/providers/news/actions';
import * as selectors from '@stores/providers/news/selectors';

export const Example: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const fetchNews = useCallback(() => dispatch(actions.fetchItems()), [dispatch]);

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

export default Example;
