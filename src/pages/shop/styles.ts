import styled from '@emotion/styled'

const margin = 6

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const Sidebar = styled.aside`
  flex: 0 0 220px;
  min-height: 1px;
  position: sticky;
  top: 0;
  margin-right: ${margin * 2}px;
`

export const Categories = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  margin-top: 10px;

  li {
    margin-bottom: 5px;
  }
`

export const Products = styled.div`
  flex: 1 1 auto;
  margin-left: -${margin}px;
  margin-right: -${margin}px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`
