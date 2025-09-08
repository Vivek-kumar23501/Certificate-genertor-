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

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/signup", form);
      alert("OTP sent to your email. Please verify.");
      // ✅ redirect to verify-otp page with email state
      navigate("/verify-otp", { state: { email: form.email } });
    } catch (error) {
      alert(error.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <>
      <AppNavbar />

      {/* Gradient Background */}
      <div
        style={{
          background: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 0",
        }}
      >
        <Container className="d-flex justify-content-center align-items-center">
          <Card
            className="p-4 shadow-lg"
            style={{ width: "450px", borderRadius: "15px" }}
          >
            <CardBody>
              <CardTitle
                tag="h3"
                className="text-center mb-4 fw-bold text-success"
              >
                ✍️ Signup
              </CardTitle>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="fw-bold">Full Name</Label>
                  <Input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="fw-bold">Email</Label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
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
                <Button color="success" type="submit" block className="fw-bold">
                  Signup
                </Button>
              </Form>

              {/* Redirect to Login */}
              <div className="text-center mt-4">
                <p className="mb-1">Already have an account?</p>
                <Link to="/login">
                  <Button color="primary" outline className="fw-bold">
                    🔐 Login Here
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
