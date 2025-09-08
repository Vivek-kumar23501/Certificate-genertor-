import { useState } from "react";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import AppNavbar from "../components/Navbar"; // ✅ Navbar import

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/login", form);
    alert("OTP sent to your email");
    navigate("/verify-otp", { state: { email: form.email } });
  };

  return (
    <>
      <AppNavbar />

      {/* Gradient Background Wrapper */}
      <div
        style={{
          background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 0",
        }}
      >
        <Container className="d-flex justify-content-center align-items-center">
          <Card className="p-4 shadow-lg" style={{ width: "400px", borderRadius: "15px" }}>
            <CardBody>
              <CardTitle
                tag="h3"
                className="text-center mb-4 fw-bold text-primary"
              >
                🔐 Login
              </CardTitle>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="fw-bold">Email</Label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="fw-bold">Password</Label>
                  <Input
                    type="password"
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    required
                  />
                </FormGroup>
                <Button
                  color="primary"
                  type="submit"
                  block
                  className="fw-bold"
                >
                  Login
                </Button>
              </Form>

              {/* Signup Redirect */}
              <div className="text-center mt-4">
                <p className="mb-1">Don’t have an account?</p>
                <Link to="/signup">
                  <Button color="success" outline className="fw-bold">
                    ✍️ Signup Here
                  </Button>
                </Link>
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    </>
  );
}
