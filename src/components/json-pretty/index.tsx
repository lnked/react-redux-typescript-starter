import * as React from 'react'
// import ReactJson from 'react-json-view'
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

export interface OuterProps {
  json: any;
}

// <ReactJson
//   src={json}
//   theme={theme}
//   displayObjectSize
// />

const JsonPretty: React.FC<OuterProps> = ({ json }: OuterProps) => (
  <Wrapper>
    {JSON.stringify(json)}
  </Wrapper>
)

export default JsonPretty
