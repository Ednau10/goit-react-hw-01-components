import styled from 'styled-components';

export const Container = styled.div`
  margin: 15px;
  perspective: 5px;
  mix-blend-mode: darken;
  border-color: var(--color2);
  border-radius: 25px;
  transform: perspective(10px);
  box-shadow: -1px -3px 6px rgba(0, 0, 0, 0.2);

  width: 300px;
  max-width: 300px;
  min-height: 0;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  direction: ltr;
  text-align: center;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  text-decoration: underline;
  display: block;

  .avatar {
    margin: 40px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .name {
    color: black;
    font-size: 10px;
    font-weight: bold;
    margin-bottom: 5px;
    text-decoration: none;
    white-space: normal;
    font-weight: bold;
    display: inline;
    margin-top: 20px;
    font-size: 38px;
    line-height: 44px;
  }

  .tag {
    color: #888888;
    margin-bottom: 5px;
  }

  .location {
    color: #888888;
    margin-bottom: 20px;
  }

  .stats {
    padding: 0;
    list-style: none;
    height: 100px;
    display: flex;
    align-content: center;
    justify-content: space-around;
    background-color: #dfd8d8;
    border-color: rgb(61, 60, 60);
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }

  .label {
    display: block;
    padding: 5px 0;
    margin: 10px 0;
  }

  .quantity {
    font-weight: bold;
    padding: 10px;
    margin: 5px;
  }
`;
