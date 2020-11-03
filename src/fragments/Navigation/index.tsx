import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { setLanguage } from 'i18n';
import { Button } from 'components';

import { routes } from 'app/routes';

import { Nav, NavigationList, NavigationItem, NavigationLink, Language } from './styles';

export type OuterProps = {};

const handleSetLanguage = (lang: 'ru' | 'en') => () => setLanguage(lang);

export const Navigation: React.FC<OuterProps> = ({ ...props }) => {
  const { t, i18n } = useTranslation();

  return (
    <Nav {...props}>
      <NavigationList>
        {routes &&
          routes.map(({ keyName, to, exact }: any) => (
            <NavigationItem key={to}>
              <NavigationLink to={to} exact={exact}>
                {t(keyName)}
              </NavigationLink>
            </NavigationItem>
          ))}
      </NavigationList>

      <Language>
        <Button onClick={handleSetLanguage('en')} disabled={i18n.language === 'en'}>
          EN
        </Button>

        <Button onClick={handleSetLanguage('ru')} disabled={i18n.language === 'ru'}>
          RU
        </Button>
      </Language>
    </Nav>
  );
};
