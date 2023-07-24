import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme";

import { FC } from "react";
import GlobalStyles from "../src/styles/global";
import { TodoList } from "./components/TodoList";
import styled from "styled-components";

const App: FC = () => {


  return (
    <ThemeProvider theme={lightTheme}>
      <Header style={{ color: '#b22222' }}>todos</Header>
      <TodoList />
      <Footer>
        Double click on todo to edit <br />
      </Footer>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;

export const Header = styled.h1`
  text-align: center;
  font-size: 48px;
  padding: 50px 0 50px 0;
`;

export const Footer = styled.h6`
  text-align: center;
  font-size: 14px;
  font-weight: 200;
  font-style: italic;
  opacity: 0.5;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export default App;
