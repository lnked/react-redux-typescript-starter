import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

import { Image as ImageSource } from 'components'
import { colors } from 'theme'

const margin = 6

export const ProductItem = styled.article`
  width: calc(20% - ${margin * 2}px);
  margin: 0;
  border: none;
  flex: 0 0 auto;
  margin: 0 ${margin}px 20px;
  background-color: ${colors.white};
`

export const Link = styled(NavLink)`
  display: block;
  user-select: none;
  text-decoration: none;
`

export const Upper = styled.div`
  position: relative;
  margin-bottom: 15px;
  background-color: #fff;

  &:before {
    content: '';
    display: block;
    background: rgba(0,0,0,.04);
    padding-bottom: 120%;
  }
`

export const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  user-select: none;
`

export const Source = styled(ImageSource)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  outline: 0;
  pointer-events: none;
  display: inline-block;
  vertical-align: middle;
`

export const Description = styled.div`
  text-align: left;
  font-size: 14px;
`

export const Brand = styled.div`
  color: #1f1f1f;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  font-size: 16px;
  text-overflow: ellipsis;
  margin-bottom: 5px;
`

export const Name = styled.div`
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  color: #1f1f1f;
  font-size: 16px;
  margin-bottom: 5px;
  font-feature-settings: "lnum";
  font-weight: 600;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  height: 20px;
`

export const Price = styled.div`
  color: ${(p: any) => p.discount ? '#707070' : '#ae4343'};
  font-weight: 400;
  font-size: ${(p: any) => p.discount ? '13px' : '16px'};

  &:not(:last-child) {
    margin-right: 10px;
  }
`

export const Label = styled.div`
  height: 20px;
  line-height: 22px;
  margin: 0;
  background: rgba(48,149,75,0.8);
  color: #fff;
  font-size: 11px;
  position: absolute;
  top: 42px;
  left: 0;
  z-index: 2;
  letter-spacing: 0.02ex;
  padding: 0 8px;
  text-transform: uppercase;
`
