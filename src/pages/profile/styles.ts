import styled from '@emotion/styled'

const sidebarWidth = 260

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  border: 1px solid lime;
  min-height: 50vh;
  background-color: #f3f3f3;
`

export const Container = styled.div`
  background-color: lime;
  flex: 1 1 auto;
  height: 100%;
`

export const Sidebar = styled.div`
  width: ${sidebarWidth}px;
  background-color: #404040;
  padding: 15px;
  color: #fff;
`

export const Content = styled.div`
  padding: 20px;
`

export const Header = styled.div`
  background-color: #f00;
  padding: 10px 20px;
`
