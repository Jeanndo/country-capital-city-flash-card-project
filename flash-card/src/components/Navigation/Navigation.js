import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { useQuery, useLazyQuery, useMutation, gql } from "@apollo/client";

const GET__ALL__CONTINENTS = gql`
  query getAllContinents {
    continents {
      id
      continentName
      country {
        capitalCity
        countryName
      }
    }
  }
`;

const Navigation = ({ setContinentId }) => {
  const navigate = useNavigate();
  const { data, loading, error, refetch } = useQuery(GET__ALL__CONTINENTS);

  const handleLogin = () => {
    navigate("/continents");
  };

  return (
    <Navbar bg="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <strong style={{ color: "orange" }}>Codemoon.io</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-items">
            <Nav.Link href="#link">
              <select
                className="continents__selection"
                onChange={(event) => setContinentId(event.target.value)}
              >
                <option value={null}>--select Continent--</option>
                {data?.continents?.map((continent) => (
                  <option value={continent?.id} key={continent?.id}>
                    {continent?.continentName}
                  </option>
                ))}
              </select>
            </Nav.Link>
            <Nav.Link href="#link">
              <button className="login-btn" onClick={handleLogin}>
                Login
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
