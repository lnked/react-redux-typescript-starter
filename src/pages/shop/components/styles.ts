import styled from '@emotion/styled'
import { colors } from 'settings/variables'

export const StylesProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`

export const StyledProduct = styled.article`
  width: 20%;
  max-width: 215px;
  margin: 0;
  border: none;
  flex: 0 0 auto;
  position: relative;
  font-size: 14px;
  margin: 0 10px 10px;
  font-family: Verlag,Helvetica,Arial,sans-serif;
  background-color: ${colors.white};

  &:first-child {
    margin-left: 0;
  }
`

export const StyledDescription = styled.div`
  padding: 12px;
  text-align: left;
`

export const StyledBrand = styled.div`
  color: #1f1f1f;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font: 400 16px Verlag,Helvetica,Arial,sans-serif;
`

export const StyledImage = styled.div`
  width: 100%;
  height: 250px;
  padding: 12px;
  user-select: none;
  text-align: center;
  line-height: 250px;
  background-color: #F5F5F5;
`

export const StyledSource = styled.img`
  max-width: 100%;
  outline: 0;
  pointer-events: none;
  display: inline-block;
  vertical-align: middle;
`

export const StyledName = styled.div`
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  color: #1f1f1f;
  font: 400 16px Verlag,Helvetica,Arial,sans-serif;
  font-feature-settings: "lnum";
  font-weight: 600;
`

export const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  height: 20px;
`

export const StyledPrice = styled.div`
  color: ${(p: any) => p.discount ? '#707070' : '#ae4343'};
  font-weight: 400;
  font-size: ${(p: any) => p.discount ? '13px' : '16px'};

  &:not(:last-child) {
    margin-right: 10px;
  }
`

export const StyledLabel = styled.div`
  line-height: normal;
  margin: 0;
  background-color: rgba(174,67,67,.1);
  color: #ae4343;
  font-feature-settings: "lnum";
  position: absolute;
  top: 4px;
  left: 4px;
  z-index: 2;
  padding: 2px 4px;
  border-radius: 2px;
  font: 400 14px Verlag,Helvetica,Arial,sans-serif;
`
