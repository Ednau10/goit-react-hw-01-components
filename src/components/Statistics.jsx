// src/components/Statistics.jsx
import React from 'react';
import {
  Container,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Container className="statistics">
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }, index) => (
          <Item key={id} style={{ backgroundColor: getRandomColor() }}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Container>
  );
};

const getRandomColor = () => '#' + Math.random().toString(16).substr(-6);

export default Statistics;
