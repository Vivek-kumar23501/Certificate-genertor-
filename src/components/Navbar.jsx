import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function AppNavbar() {
  const navigate = useNavigate();

  return (
    <Navbar color="dark" dark expand="md" className="px-4">
      <NavbarBrand href="/">🎓 CertiGen</NavbarBrand>
      <Nav className="ms-auto" navbar>
        <NavItem>
          <Button color="primary" className="me-2" onClick={() => navigate("/login")}>
            Login
          </Button>
        </NavItem>
        <NavItem>
          <Button color="warning" onClick={() => navigate("/signup")}>
            Signup
          </Button>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
