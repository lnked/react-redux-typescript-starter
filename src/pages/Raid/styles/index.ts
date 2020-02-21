import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid red;
`;

export const Part = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 15px;
  border: 2px solid #ddd;
`;

export const PartTitle = styled.div`
  font-size: 1.6rem;
  line-height: 1;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 10px;
`;

export const SummaryGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid lime;
`;

export const SummaryItem = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  outline: 0;
  height: 28px;
  padding: 0 5px;
  text-align: center;
  border: 1px solid #ddd;
`;

export const Upper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid lime;
`;

export const Bottom = styled.div`
display: flex;
align-items: center;
justify-content: center;
  border: 1px solid lime;
`;
