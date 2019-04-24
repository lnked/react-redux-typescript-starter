import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Input, Button } from 'components';

import {
  API_URL,
  REACT_APP_SECRET,
} from 'settings';

const Home = ({ initialLanguage = 'ru' }: any) => {
  const [lng, setLanguage] = React.useState(initialLanguage);
  const { t, i18n } = useTranslation(lng);

  return (
    <div>
      <h2>Home</h2>
      <Button>This is a hotpink button.</Button>

      <br/>
      <br/>

      <div style={{ marginBottom: 20 }}>
        <Input />
      </div>

      <div style={{ marginBottom: 20 }}>
        <Input value={1} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <Input value="xxxx" />
      </div>

      <div>API_URL: {API_URL}</div>
      <div>REACT_APP_SECRET: {REACT_APP_SECRET}</div>

      <h2>{t('title', { count: 10 })}</h2>
      <h2>{t('example')}</h2>
      <h2>age.label: {t('age.label')}</h2>

      <br/>

      <div>Current language: {lng}</div>
      <br/>

      <Button
        onClick={() => {
          setLanguage('en');
          i18n.changeLanguage('en');
        }}
      >
        en
      </Button>

      <Button
        onClick={() => {
          setLanguage('ru');
          i18n.changeLanguage('ru');
        }}
      >
        ru
      </Button>

      <br/>

      <div>{i18n.t('name.label')}</div>
      <div>{i18n.t('home.label')}</div>
    </div>
  );
};

export default Home;
