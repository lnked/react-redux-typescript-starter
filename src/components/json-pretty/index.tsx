import * as React from 'react'
import ReactJson from 'react-json-view'
import styled from '@emotion/styled'

const theme = 'monokai'

export const Wrapper = styled.div`
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  & > div {
    padding: 10px;
  }
`

export interface P {
  json: any;
}

const JsonPretty: React.FC<P> = ({ json }) => (
  <Wrapper>
    <ReactJson
      src={json}
      theme={theme}
      displayObjectSize
    />
  </Wrapper>
)

export default JsonPretty
