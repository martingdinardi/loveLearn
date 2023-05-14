import { styled } from "styled-components";
import logo from "../../assets/logo.svg";

const NavbarContainer = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  small {
    color: var(--lightgray);
  }
  .site-author a {
    font-weight: 700;
  }

  @media (min-width: 690px) {
    small {
      font-size: 1rem;
    }
  }

  @media (max-width: 690px) {
    flex-direction: column;
    gap: 0.6rem;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <div className="navbar-header">
        <img src={logo} width={"180px"} />
        <small>beta</small>
      </div>
      <div className="site-author">
        <small>
          Desarrollado por{" "}
          <a href="https://www.linkedin.com/in/martin-gamboa-dinardi/">
            Martín Gamboa Dinardi
          </a>
        </small>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
