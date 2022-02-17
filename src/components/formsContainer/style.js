import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  &:not(:first-child) {
  }
  small {
    color: #ff4040;
    padding-left: 10px;
    font-size: 10px;
    font-weight: bold;
    width: 300px;
  }
`;
