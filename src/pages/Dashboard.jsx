import { useState, useRef } from "react";
import { Container, Form, FormGroup, Label, Input, Button, Card, CardBody, CardTitle } from "reactstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Dashboard() {
  const [name, setName] = useState("");
  const certRef = useRef(null);

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const element = certRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("landscape", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${name}-certificate.pdf`);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <Card className="p-5 shadow-lg" style={{ width: "500px" }}>
        <CardBody>
          <CardTitle tag="h3" className="text-center mb-4">🎓 Certificate Generator</CardTitle>
          <Form onSubmit={handleGenerate}>
            <FormGroup>
              <Label>Student Name</Label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Enter participant name "
                required
              />
            </FormGroup>
            <Button color="success" type="submit" block>
              Download Certificate
            </Button>
          </Form>
        </CardBody>
      </Card>
      
      {/* Hidden certificate template */}
      <div
        ref={certRef}
        style={{
          width: "1123px",    // approx A4 dimensions in px (landscape)
          height: "794px",
          backgroundImage: "url(/certificate-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: "-9999px",     // hide off-screen
          left: "-9999px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Canva Sans, serif",
          fontSize: "32px",
          color: "black",
          textAlign: "center",
          
          padding: "50px"
        }}
      >
        {name}
      </div>
    </Container>
  );
}
