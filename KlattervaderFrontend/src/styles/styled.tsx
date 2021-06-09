import styled from 'styled-components';

const AppView = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 100px calc(100vw - 100px);
`;

const MainView = styled.div`
  padding: 40px;
  display: grid;
`;

export { AppView, MainView };