import { Flex } from 'reflexbox/styled-components';
import styled, { css } from 'styled-components/macro';

const COLOR_GETTERS = {
  specialInvert: {
    softGray: '#F1F2F4',
    softMallowPurple: '#E8E6FF',
    softPurple: '#EDF1FF',
    softPink: '#FFEBF8',
    softRed: '#FFEBED',
    softPapaya: '#F9EECF',
    softYellow: '#FFF1D4',
    softGreen: '#D8F5E8',
    softTiffany: '#DBF8FF',
    softSkyBlue: '#E2F4FE',
    softNiceBlue: '#E0E9FF',
    softBlue: '#E0F2FF',
    blueDark: '#001157',
    gray: '#98ABCD',
    rainySky: '#62676F',
    fuchsiaDeep: '#D9477C',
    fuchsia: '#F86D86',
    violetDeep: '#9A64F7',
    violet: '#C368DA',
    violetLight: '#ED6CCD',
    orangeDeep: '#FF5A32',
    orange: '#FF8515',
    orangeLight: '#FFAF37',
    yellow: '#F0DE37',
    tiffanyBlue: '#00BCD4',
    tiffanyDark: '#147F94',
    tiffanyDeep: '#24A79F',
    tiffany: '#5BD8D1',
    greenDeep: '#44BF78',
    green: '#5ECF70',
    greenLight: '#C0D20F',
    blueDeep: '#3E51B5',
    blue: '#3F7DFE',
    blueLight: '#0ABBFB',
  },
  specialStatic: {
    softGray: '#F1F2F4',
    softMallowPurple: '#E8E6FF',
    softPurple: '#EDF1FF',
    softPink: '#FFEBF8',
    softRed: '#FFEBED',
    softPapaya: '#F9EECF',
    softYellow: '#FFF1D4',
    softGreen: '#D8F5E8',
    softTiffany: '#DBF8FF',
    softSkyBlue: '#E2F4FE',
    softNiceBlue: '#E0E9FF',
    softBlue: '#E0F2FF',
    gray: '#98ABCD',
    night: '#2B313B',
    rainySky: '#62676F',
    fuchsiaDeep: '#D9477C',
    fuchsia: '#F86D86',
    violetDeep: '#9A64F7',
    violet: '#C368DA',
    violetLight: '#ED6CCD',
    orangeDeep: '#FF5A32',
    orange: '#FF8515',
    orangeLight: '#FFAF37',
    tiffanyBlue: '#00BCD4',
    tiffanyDark: '#147F94',
    tiffany: '#5BD8D1',
    greenDeep: '#44BF78',
    green: '#5ECF70',
    greenLight: '#C0D20F',
    blueDeep: '#3E51B5',
    blue: '#3F7DFE',
    blueLight: '#0ABBFB',
  },
  background: {
    shadow: '#8A96A8',
    header: '#0949AA',
    surfaceSuccess: '#F2FCF5',
    surfaceWarn: '#FFF7F0',
    surfaceDanger: '#FEF0F1',
    inversion: '#2B313B',
    cardHover: '#FFFFFF',
    card: '#FFFFFF',
    tertiaryHover: '#D3D8DE',
    tertiary: '#E2E5E9',
    page: '#F1F2F4',
    secondary: '#F1F2F4',
    primary: '#FFFFFF',
  },
  status: {
    pressDanger: '#910815',
    hoverDanger: '#A90919',
    danger: '#DA0B20',
    pressSuccess: '#1C7D3C',
    hoverSuccess: '#219246',
    success: '#2ABB5B',
    pressWarn: '#CC6600',
    hoverWarn: '#E57300',
    warn: '#FF8C19',
  },
  text: {
    staticBlack: '#2B313B',
    staticWhite: '#FFFFFF',
    inversion: '#FFFFFF',
    tertiary: '#A7B0BE',
    secondary: '#626F84',
    primary: '#2B313B',
  },
  basic: {
    disable: '#C4CAD4',
    press: '#0949AA',
    hover: '#0A54C2',
    tertiary: '#8A96A8',
    secondary: '#2B313B',
    primaryLight: '#6EA5F7',
    primary: '#0D69F2',
  },
};

const hexToRgba = (hex: any, opacity: any) => {
  const hexValue = hex.replace('#', '');
  const hexValueDivided = hexValue.match(new RegExp('(.{' + hexValue.length / 3 + '})', 'g'));
  const rgbaValue = [];

  if (!hexValueDivided) {
    throw new Error('Incorrect color srting');
  }

  for (let i = 0; i < hexValueDivided.length; i++) {
    rgbaValue[i] = parseInt(
      hexValueDivided[i].length == 1 ? hexValueDivided[i] + hexValueDivided[i] : hexValueDivided[i],
      16,
    );
  }

  if (opacity !== undefined) {
    rgbaValue.push(opacity);
  }

  return 'rgba(' + rgbaValue.join(',') + ')';
};

const Z_INDEX: any = {
  level1: 10,
  level2: 20,
  popupLevel1: 22335,
};

export const ICON_SIZE = {
  xs: 20,
  ml: 40,
  l: 48,
};

const INDENT = {
  xxxxs: '4px',
  xxxs: '8px',
  xxs: '12px',
  xs: '16px',
  s: '20px',
  sm: '24px',
  m: '32px',
  l: '40px',
  xl: '48px',
  xxl: '56px',
  xxxl: '64px',
  none: '0px',
  auto: 'auto',
};

const FIELD_WIDTH = {
  auto: '100%',
  xs: '160px',
  s: '256px',
  m: '352px',
  l: '448px',
  xl: '544px',
  xxl: '736px',
};

const OPACITY_LEVEL_13 = 0.6;

import { BORDER_PERCENT_SIZE, CORNER_PERCENT_SIZE, FRAME_SHIFT_SIZE } from '../constants';

export const QRButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  alignt-items: center;
  justify-content: center;
  color: ${COLOR_GETTERS.text.secondary};
  background-color: none;
  border: 0;
  cursor: pointer;
`;

export const CardButton = styled.button`
  width: ${FIELD_WIDTH.auto};
  border: none;
  display: flex;
  align-items: center;
  padding: ${INDENT.xxxs};
  background: none;
  border-radius: 8px;
  text-align: left;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${COLOR_GETTERS.background.secondary};
  }
`;

export const CardIcon = styled.img.attrs({ width: ICON_SIZE.xs })`
  width: ${ICON_SIZE.ml}px;
  height: ${ICON_SIZE.ml}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: ${INDENT.xs};
  color: ${COLOR_GETTERS.basic.primary};
  background-color: ${COLOR_GETTERS.background.secondary};
`;

export const CardIconOperations = styled(CardIcon)`
  width: ${ICON_SIZE.l}px;
  height: ${ICON_SIZE.l}px;
  color: ${COLOR_GETTERS.text.staticWhite};
  background-color: ${COLOR_GETTERS.basic.primary};
`;

export const CardTitle = styled.p``;

const getFrameSize = () => {
  const winWidth = window.innerWidth;

  return winWidth - winWidth * ((BORDER_PERCENT_SIZE * 2) / 100);
};

const getRectPosition = () => {
  const frameSize = getFrameSize();
  const winHeight = window.innerHeight;

  const shiftSize = (FRAME_SHIFT_SIZE / winHeight) * 100;
  const topPosition = (frameSize / winHeight) * 100;
  const bottomPosition = ((frameSize * 2) / winHeight) * 100;

  return {
    top: topPosition - shiftSize,
    bottom: bottomPosition - shiftSize,
  };
};

const getTitlePosiiton = () => {
  const { top } = getRectPosition();

  return css`calc(${top}% - ${INDENT.xl})`;
};

const getCornerSize = () => {
  const frameSize = getFrameSize();

  return Math.floor((frameSize * CORNER_PERCENT_SIZE) / 100);
};

const cornerSizeRect = () => {
  const cornerSize = getCornerSize();

  return css`
    width: ${cornerSize}px;
    height: ${cornerSize}px;
    box-sizing: border-box;
  `;
};

const generateClipPath = () => {
  const { top, bottom } = getRectPosition();

  return css`
    border-radius: 16px;
    outline: rgba(43, 49, 59, 0.6) solid 50vmax;
    backdrop-filter: blur(8px);
    width: 264px;
    height: 264px;

    content: '';
    position: absolute;
    left: ${BORDER_PERCENT_SIZE}%;
    top: ${top}%;
    z-index: 20;

    /*
    clip-path: polygon(
      0% 0%,
      0% 100%,
      ${BORDER_PERCENT_SIZE}% 100%,
      ${BORDER_PERCENT_SIZE}% ${top}%,
      ${100 - BORDER_PERCENT_SIZE}% ${top}%,
      ${100 - BORDER_PERCENT_SIZE}% ${bottom}%,
      ${BORDER_PERCENT_SIZE}% ${bottom}%,
      ${BORDER_PERCENT_SIZE}% 100%,
      100% 100%,
      100% 0%
    ); */
  `;
};

const fullSize = css`
  left: ${INDENT.none};
  right: ${INDENT.none};
  width: ${FIELD_WIDTH.auto};
  height: 100%;
`;

export const ModalWindow = styled.div<{ $opened: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  overflow: hidden;
  z-index: ${Z_INDEX.popupLevel1 + 1};

  &,
  &::before {
    ${fullSize};
  }

  &::before {
    /* ${generateClipPath()}; */
    content: '';
    position: absolute;
    z-index: ${Z_INDEX.level2};
    backdrop-filter: blur(8px);
    outline: 200vh solid ${hexToRgba(COLOR_GETTERS.background.inversion, OPACITY_LEVEL_13)};
    border-radius: 16px;
    width: 263px;
    height: 263px;
    left: ${BORDER_PERCENT_SIZE}%;
    top: 36%;
  }

  &::after {
    content: '';
    border: 2px solid ${COLOR_GETTERS.text.staticWhite};
  }

  ${({ $opened }) =>
    !$opened &&
    css`
      display: none;
    `}
`;

export const modalFrameUnit = () => css`
  ${cornerSizeRect()};
  content: '';
  position: absolute;
  border-style: solid;
  border-color: ${COLOR_GETTERS.background.primary};
  z-index: ${Z_INDEX.level2 + 1};
  opacity: ${OPACITY_LEVEL_13};
`;

export const modalFrame = () => css`
  ${fullSize};
  position: absolute;
  pointer-events: none;

  &::after,
  &::before {
    ${modalFrameUnit()};
  }
`;

const getTopPosition = () => {
  const { top } = getRectPosition();

  return css`
    top: ${top}%;
  `;
};

const getBottomPosition = () => {
  const cornerSize = getCornerSize();
  const { bottom } = getRectPosition();

  return css`
    top: ${bottom}%;
    margin-top: -${cornerSize}px;
  `;
};

export const ModalFrameUpper = styled.div`
  ${modalFrame()};

  &::before {
    ${getTopPosition()};
    left: ${BORDER_PERCENT_SIZE}%;
    border-width: 4px 0 0 4px;
    border-radius: 14px 0 0 0;
  }

  &::after {
    ${getTopPosition()};
    right: ${BORDER_PERCENT_SIZE}%;
    border-width: 4px 4px 0 0;
    border-radius: 0 14px 0 0;
  }
`;

export const ModalFrameBottom = styled.div`
  ${modalFrame()};

  &::before {
    ${getBottomPosition()};
    left: ${BORDER_PERCENT_SIZE}%;
    border-radius: 0 0 0 14px;
    border-width: 0 0 4px 4px;
  }

  &::after {
    ${getBottomPosition()};
    right: ${BORDER_PERCENT_SIZE}%;
    border-width: 0 4px 4px 0;
    border-radius: 0 0 14px 0;
  }
`;

export const ModalTitle = styled.p`
  position: absolute;
  top: ${getTitlePosiiton()};
  left: ${INDENT.none};
  right: ${INDENT.none};
  width: ${FIELD_WIDTH.auto};
  color: ${COLOR_GETTERS.text.staticWhite};
  z-index: ${Z_INDEX.level2};
  text-align: center;
`;

export const ModalCanvas = styled.canvas`
  position: absolute;
`;

export const ModalCamera = styled.video`
  ${fullSize};
  position: absolute;
  z-index: ${Z_INDEX.level1};
  border: 0;
  outline: 0;
`;

export const ModalControls = styled(Flex)`
  position: absolute;
  left: ${INDENT.none};
  right: ${INDENT.none};
  bottom: ${INDENT.xxxl};
  z-index: ${Z_INDEX.level2};
`;

export const ModalControlsButton = styled.button.attrs({ type: 'button', disabled: true })`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  color: ${COLOR_GETTERS.text.staticWhite};
  background-color: ${COLOR_GETTERS.basic.primary};
  opacity: ${OPACITY_LEVEL_13};

  span {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
  }

  svg {
    width: auto;
    height: 100%;
    max-height: 20px;
  }

  &:not(:first-child) {
    margin-left: ${INDENT.xs};
  }

  &:not(:last-child) {
    margin-right: ${INDENT.xs};
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  right: ${INDENT.sm};
  top: ${INDENT.sm};
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLOR_GETTERS.text.staticWhite};
  background-color: transparent;
  z-index: ${Z_INDEX.level2};
  border: 0;
  cursor: pointer;

  span {
    width: 14px;
    height: 14px;
    min-width: 14px;
    min-height: 14px;
  }

  svg {
    width: auto;
    height: 100%;
    max-height: 14px;
  }
`;
