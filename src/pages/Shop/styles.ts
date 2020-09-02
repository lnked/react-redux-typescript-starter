import styled from 'styled-components/macro';

import { ProductCard } from './components/ProductCard';

const margin = 5;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Product = styled(ProductCard)`
  flex: 0 0 auto;
  width: calc(20% - ${margin * 2}px);
  margin: 0 ${margin}px ${margin * 2}px;
`;

export const Sidebar = styled.aside`
  flex: 0 0 220px;
  min-height: 1px;
  position: sticky;
  top: 0;
  margin-right: ${margin * 2}px;
`;

export const Categories = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  margin-top: 10px;

  li {
    margin-bottom: 5px;
  }
`;

export const Products = styled.div`
  flex: 1 1 auto;
  margin-left: -${margin}px;
  margin-right: -${margin}px;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: flex-start;
`;
