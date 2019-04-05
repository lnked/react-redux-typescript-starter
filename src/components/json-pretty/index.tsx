import * as React from 'react'
import styled from '@emotion/styled'

// const theme = 'monokai'

export const Wrapper = styled.pre`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f5f5f5;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const Code = styled.code`
  color: #333;
  display: inline-block;
  font-size: 1.4rem;
  line-height: 1.54;
`

export interface OuterProps {
  json: any;
  theme?: string;
}

const JsonPretty: React.FC<OuterProps> = ({ json }: OuterProps) => (
  <Wrapper>
    <Code lang="json">
      {JSON.stringify(json, null, '  ')}
    </Code>
  </Wrapper>
)

export default JsonPretty
