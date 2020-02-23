import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const Part = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 110px;
  height: 110px;
  margin: 15px;
  padding: 25px;
  border: 2px solid #ddd;
`;

export const PartTitle = styled.div`
  font-size: 1.6rem;
  line-height: 1;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 10px;
`;

export const Background = styled.img`
  display: none;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  z-index: 0;
`;

export const PartCheckbox = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  font-size: 0;
  line-height: 0;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  margin: 0;
  padding: 0;
`;

export const SummaryGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const SummaryItem = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 100px;
  outline: 0;
  height: 28px;
  padding: 0 5px;
  text-align: center;
  border: 1px solid #ddd;
`;

export const Parameters = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Upper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Attributes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
