import { styled } from "styled-components";
import logo from "../../assets/logo.svg";

const NavbarContainer = styled.div`
  padding: 2rem;
  small {
    color: var(--lightgray);
  }
  display: flex;
  justify-content: space-between;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <div className="navbar-header">
        <img src={logo} width={"180px"} />
        <small>beta</small>
      </div>
      <div className="site-author">
        <small>Desarrollado por Martín Gamboa Dinardi</small>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
