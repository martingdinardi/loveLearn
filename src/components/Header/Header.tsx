import { styled } from "styled-components";
import header_logo from "../../assets/header-logo.svg";

const HeaderContainer = styled.div`
  padding: 4rem 0;
`;

const HeaderText = styled.div`
  max-width: 50rem;
  h1 {
    margin: 2rem 0 1rem 0;
    word-break: break-word;
  }
  h2 {
    margin: 2rem 0;
  }
`;
function Header() {
  return (
    <HeaderContainer>
      <HeaderText>
        <img src={header_logo} width={"120px"} />
        <h1>¡Una biblioteca de cursos gratuitos en constante crecimiento!</h1>
        <h2>
          Fortalece tus habilidades en programación, alcanza nuevos logros y
          sobre todo, disfruta del camino!
        </h2>
      </HeaderText>
    </HeaderContainer>
  );
}

export default Header;
