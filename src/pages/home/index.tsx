import * as React from 'react';
import { useTranslation } from 'react-i18next';
import useReactRouter from 'use-react-router';

import { Image, Input, Button } from 'components';

import {
  API_URL,
  REACT_APP_SECRET,
} from 'settings';

import code from 'assets/images/code.png';
import globe from 'assets/images/globe.jpg';
import formats from 'assets/images/gif-png-jpg.gif';

import * as styles from './styles.module.scss';

const Home = () => {
  const { t } = useTranslation();
  const { history, location, match } = useReactRouter();

  const handleChange = (name: string) => (e: any, value: any) =>
    console.info('change: ', {
      e,
      name,
      value,
    });

  return (
    <div className={styles.container}>
      <Image width={100} height={100} src={globe} alt="Globe" />

      <span style={{ backgroundColor: '#000', display: 'inline-block' }}>
        <img width={100} height={100} src={code} alt="" />
      </span>

      <img height={100} src={globe} alt="" />
      <img height={100} src={formats} alt="" />

      <div>My location is {location.pathname}!</div>
      <div>location: {JSON.stringify(location)}!</div>
      <div>history: {JSON.stringify(history)}!</div>
      <div>match: {JSON.stringify(match)}!</div>

      <h2>Home</h2>
      <Button>This is a hotpink button.</Button>
      <br/>

      <div>1&nbsp;&nbsp;&nbsp;2</div>

      <div style={{ marginBottom: 20 }}>
        <Input onChange={handleChange('v1')} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <Input onChange={handleChange('v2')} value={1} />
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

      <br/>

      <div>{t('name.label')}</div>
      <div>{t('home.label')}</div>
    </div>
  );
};

export default Home;
