import { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button, Card, CardBody, CardTitle } from "reactstrap";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function OtpVerify() {
  const [otp, setOtp] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/verify-otp", {
      email: state.email,
      otp,
    });
    localStorage.setItem("token", res.data.token);
    alert("OTP Verified! Redirecting to Dashboard.");
    navigate("/dashboard");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <Card className="p-4 shadow-lg" style={{ width: "400px" }}>
        <CardBody>
          <CardTitle tag="h3" className="text-center mb-4">Verify OTP</CardTitle>
          <Form onSubmit={handleVerify}>
            <FormGroup>
              <Label>Enter OTP</Label>
              <Input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="6-digit OTP"
                required
              />
            </FormGroup>
            <Button color="primary" type="submit" block>
              Verify
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}
