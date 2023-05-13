import { styled } from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import CourseCard from "./components/CourseCard/CourseCard";

const AppContainer = styled.div`
  margin: auto;
  max-width: 95rem;
  padding: 0 5rem;
`;

function App() {
  return (
    <>
      <Navbar />
      <AppContainer>
        <Header />
        <CourseCard />
      </AppContainer>
    </>
  );
}

export default App;
