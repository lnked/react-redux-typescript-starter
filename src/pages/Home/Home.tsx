import * as React from 'react';
import { useTranslation } from 'react-i18next';
import useReactRouter from 'use-react-router';
import { Box, Flex } from 'reflexbox/styled-components';
import { css } from 'styled-components/macro';

import { Image } from '@components/Image';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Chip, CHIP_SIZE } from '@components/Chip';
import { SKELETON_THEME, Skeleton } from '@components/Skeleton';

import { filterProps } from '../../helpers/tokens';

import globe from '@assets/images/globe.jpg';

const SButton = filterProps('button', ['color'])<{ color: string }>`
  cursor: pointer;

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

const SButton1 = filterProps(Button, ['color'])`
  color: ${({ coldrex }) => `${coldrex}`}
`;

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const { history, location, match } = useReactRouter();

  const handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>, value: any) =>
    console.info('change: ', {
      e,
      name,
      value,
    });

  return (
    <div>
      <SButton color="violet">Button</SButton>
      <SButton1>Button</SButton1>

      <Chip label="Chip size s" size={CHIP_SIZE.s} />
      <Chip label="Chip size m" size={CHIP_SIZE.m} />
      <Chip label="Chip size l" size={CHIP_SIZE.l} />
      <Chip label="Chip size x" size={CHIP_SIZE.x} />

      <Flex alignItems="center" justifyContent="space-between" mb={20} style={{ fontSize: 0 }}>
        <Box width={50} height={50} mr={12}>
          <Skeleton width={50} height={50} circle />
        </Box>

        <Box flex={1}>
          <Box mb="4px">
            <Skeleton height={16} isFluid />
          </Box>

          <Skeleton width="50%" height={16} />
        </Box>
      </Flex>

      <Flex alignItems="center" justifyContent="space-between" mb={20} style={{ fontSize: 0 }}>
        <Box width={50} height={50} mr={12}>
          <Skeleton width={50} height={50} theme={SKELETON_THEME.dark} circle />
        </Box>

        <Box flex={1}>
          <Box mb="4px">
            <Skeleton height={16} theme={SKELETON_THEME.dark} isFluid />
          </Box>

          <Skeleton width="50%" height={16} theme={SKELETON_THEME.dark} />
        </Box>
      </Flex>

      <Box py={20}>
        <Image width={100} height={100} src={globe} alt="Globe" />
      </Box>

      <div>My location is {location.pathname}!</div>
      <div>location: {JSON.stringify(location)}!</div>
      <div>history: {JSON.stringify(history)}!</div>
      <div>match: {JSON.stringify(match)}!</div>

      <h2>Home</h2>
      <Button>This is a hotpink button.</Button>
      <br />

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

      <h2>{t('title', { count: 10 })}</h2>
      <h2>{t('example')}</h2>
      <h2>age.label: {t('age.label')}</h2>

      <br />

      <br />

      <div>{t('name.label')}</div>
      <div>{t('home.label')}</div>
    </div>
  );
};

export default Home;
