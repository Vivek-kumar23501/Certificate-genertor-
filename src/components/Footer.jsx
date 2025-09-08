import { Container } from "reactstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <Container className="text-center">
        <p>© {new Date().getFullYear()} CertiGen | Built with ❤️ using React & Node.js</p>
      </Container>
    </footer>
  );
}
