import { styled } from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
const AppContainer = styled.div`
  margin: auto;
  max-width: 95rem;
  padding: 0 5rem;
  @media (max-width: 690px) {
    padding: 0 1rem;
  }
`;

function App() {
  return (
    <>
      <Navbar />
      <AppContainer>
        <Header />
        <Main />
      </AppContainer>
    </>
  );
}

export default App;
