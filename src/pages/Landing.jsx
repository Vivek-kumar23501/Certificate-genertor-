import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import AppNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <AppNavbar />

      {/* Hero Section with Gradient */}
      <div
        style={{
          background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
          color: "white",
          padding: "100px 0",
          textAlign: "center",
        }}
      >
        <Container>
          <h1 className="display-3 fw-bold mb-3">
            🎓 Instant Certificate Generator
          </h1>
          <p className="lead mb-4">
            Create and download professional certificates in just a few clicks.
            <br /> Simple, Secure, and Lightning Fast!
          </p>
          <Button
            color="warning"
            size="lg"
            className="fw-bold"
            onClick={() => navigate("/login")}
          >
            🚀 Get Started
          </Button>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="my-5">
        <Row className="text-center mb-4">
          <h2 className="fw-bold">Why Choose CertiGen?</h2>
        </Row>
        <Row>
          <Col md="4" className="mb-4">
            <Card className="shadow-lg border-0 h-100">
              <CardBody>
                <CardTitle tag="h4">🔒 Secure Login</CardTitle>
                <CardText>
                  OTP-based authentication ensures your certificates are always
                  safe.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card className="shadow-lg border-0 h-100">
              <CardBody>
                <CardTitle tag="h4">⚡ Easy to Use</CardTitle>
                <CardText>
                  Enter your name and get a certificate instantly — no hassle, no
                  waiting.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card className="shadow-lg border-0 h-100">
              <CardBody>
                <CardTitle tag="h4">⬇️ Instant Download</CardTitle>
                <CardText>
                  Download PDF certificates in high quality with just one click.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* How It Works Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
          padding: "80px 0",
        }}
      >
        <Container>
          <Row className="text-center mb-5">
            <h2 className="fw-bold">How It Works?</h2>
            <p className="text-dark">
              Just three simple steps to get your certificate.
            </p>
          </Row>
          <Row>
            <Col md="4" className="text-center">
              <h3>1️⃣ Signup/Login</h3>
              <p>Create your free account using email & OTP verification.</p>
            </Col>
            <Col md="4" className="text-center">
              <h3>2️⃣ Enter Details</h3>
              <p>Provide your name or required information for the certificate.</p>
            </Col>
            <Col md="4" className="text-center">
              <h3>3️⃣ Download</h3>
              <p>Generate & download your professional certificate instantly.</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Testimonials Section */}
      <Container className="my-5">
        <Row className="text-center mb-5">
          <h2 className="fw-bold">What Our Users Say</h2>
        </Row>
        <Row>
          <Col md="6" className="mb-4">
            <Card className="shadow border-0">
              <CardBody>
                <CardText>
                  “This certificate generator saved me hours of design work.
                  Super fast and professional results!”
                </CardText>
                <h6 className="fw-bold">- Ankit Sharma</h6>
              </CardBody>
            </Card>
          </Col>
          <Col md="6" className="mb-4">
            <Card className="shadow border-0">
              <CardBody>
                <CardText>
                  “The OTP login makes it feel really secure. The certificate
                  looked amazing!”
                </CardText>
                <h6 className="fw-bold">- Priya Verma</h6>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Call-to-Action Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
          color: "white",
          padding: "70px 0",
          textAlign: "center",
        }}
      >
        <Container>
          <h2 className="fw-bold mb-3">Ready to Create Your Certificate?</h2>
          <p className="lead mb-4">
            Join thousands of users who generate certificates in seconds.
          </p>
          <Button
            color="light"
            size="lg"
            className="fw-bold text-primary"
            onClick={() => navigate("/signup")}
          >
            ✍️ Signup Now
          </Button>
        </Container>
      </div>

      <Footer />
    </>
  );
}
