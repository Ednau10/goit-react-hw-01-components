import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  margin-right: 10px;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 10%;
  object-fit: cover;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 30px;
  margin: 0;
`;
