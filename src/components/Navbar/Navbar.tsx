import { styled } from "styled-components";
import logo from "../../assets/logo.svg";

const NavbarContainer = styled.div`
  padding: 2rem;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <img src={logo} width={"180px"} />
    </NavbarContainer>
  );
}

export default Navbar;
