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
  h3 {
    margin: 2rem 0 3rem 0;
  }

  img {
    width: 120px;
  }
  @media (max-width: 690px) {
    img {
      width: 60px;
    }
  }
`;
function Header() {
  return (
    <HeaderContainer>
      <HeaderText>
        <img src={header_logo} />
        <h1>
          ¡Te doy la bienvenida a esta biblioteca de cursos gratuitos en
          constante crecimiento!
        </h1>
        <h2>
          He seleccionado y agrupado para ti aquellos mentores y cursos
          gratuitos que me han sido de ayuda en mi desarrollo profesional
          ¡Espero que sea de utilidad para que fortalezcas tus habilidades en el
          desarrollo de software y puedas alcanzar todas tus metas!
        </h2>
        <h3>- Martín</h3>
      </HeaderText>
    </HeaderContainer>
  );
}

export default Header;
