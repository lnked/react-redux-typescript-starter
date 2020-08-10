// import * as React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

import { Image as ImageSource } from 'components';
import { Colors } from 'themes';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  itemtype?: string;
  itemscope?: boolean;
}

export interface PriceProps extends React.HTMLAttributes<HTMLDivElement> {
  discount?: boolean;
}

export const Card = styled.article<CardProps>`
  padding: 0;
  font-size: 1.6rem;
  border: none;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  background-color: ${Colors.lightGray};
`;

export const Link = styled(NavLink)`
  line-height: 0;
  display: block;
  position: relative;
  user-select: none;
  text-decoration: none;
`;

export const Image = styled(ImageSource)`
  width: 100%;
  user-select: none;

  &:before {
    content: '';
    display: block;
    background: rgba(0,0,0,.04);
    padding-bottom: 100%;
  }

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    pointer-events: none;
    display: inline-block;
    vertical-align: middle;
    outline: 0;
  }
`;

export const Description = styled.div`
  padding: 20px 12px 12px;
  position: relative;
  text-align: left;
  border-width: 0 1px 1px;
  border-style: solid;
  border-color: #ddd;
`;

export const Brand = styled.div`
  color: #666;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  font-size: .9em;
  line-height: 1;
  text-overflow: ellipsis;

  &:not(:last-child) {
    margin-bottom: .35em;
  }
`;

export const Name = styled.div`
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  color: #222;
  font-size: 1.1em;
  font-weight: 500;
  font-feature-settings: 'lnum';

  &:not(:last-child) {
    margin-bottom: .35em;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  height: 20px;
`;

export const Like = styled.button`
  position: absolute;
  right: 12px;
  top: 10px;
  border: 0;
  outline: 0;
`;

export const Price = styled.div<PriceProps>`
  color: ${(p: PriceProps) => p.discount ? '#707070' : '#ae4343'};
  font-size: ${(p: PriceProps) => p.discount ? '13px' : '16px'};
  font-weight: 400;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Label = styled.div`
  height: 20px;
  line-height: 22px;
  margin: 0;
  background: rgba(48,149,75,0.8);
  color: #fff;
  font-size: 11px;
  position: absolute;
  top: 22px;
  left: 0;
  z-index: 2;
  letter-spacing: 0.02ex;
  padding: 0 8px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
  text-transform: uppercase;
`;
