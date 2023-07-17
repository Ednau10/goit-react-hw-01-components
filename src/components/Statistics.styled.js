// src/components/Statistics.styled.js
import styled from 'styled-components';

export const Container = styled.section`
  background-color: #f3f3f3;
  padding: 10px;
  display: block;
  max-width: 300px;
  margin: 10px;
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 20px;
  text-align: center;
`;

export const StatList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: ${({ color }) => color};
`;

export const Label = styled.span`
  font-weight: bold;
  padding: 10px;
`;

export const Percentage = styled.span`
  color: white;
  font-weight: bold;
  padding: 10px;
`;
