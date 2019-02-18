import * as React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  color: hotpink;
`

const Home = () => (
  <div>
    <h2>Home</h2>
    <Button>This is a hotpink button.</Button>
  </div>
)

export { Home }
