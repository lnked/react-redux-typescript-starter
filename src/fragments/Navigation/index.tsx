import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { setLanguage } from 'i18n';
import { Button } from 'components';

import { routes } from 'app/routes';

import {
  Nav,
  NavigationList,
  NavigationItem,
  NavigationLink,
  Language,
} from './styled';

export interface OuterProps {}

const Navigation: React.FC<OuterProps> = ({ ...props }) => {
  const { t, i18n } = useTranslation();

  return (
    <Nav {...props}>
      <NavigationList>
        {routes && routes.map(({ keyName, component, ...link }: any) => (
          <NavigationItem key={link.to}>
            <NavigationLink {...link} component={component}>
              {t(keyName)}
            </NavigationLink>
          </NavigationItem>
        ))}
      </NavigationList>

      <Language>
        <Button onClick={() => setLanguage('en')} disabled={i18n.language === 'en'}>
          EN
        </Button>

        <Button onClick={() => setLanguage('ru')} disabled={i18n.language === 'ru'}>
          RU
        </Button>
      </Language>
    </Nav>
  );
};

export default Navigation;
