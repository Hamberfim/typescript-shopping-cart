import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col className="sm">
            <h4 className="fw-bold">
              Welcome to the Theanine Shopping Corporation
            </h4>
            <p className="lead fst-italic">Where we're just good enough.</p>
            <Image
              className="float-end ms-2 p-2"
              src="../imgs/officeBuilding.jpg"
              fluid
              thumbnail
              rounded
              style={{ width: "40%" }}
            />
            <div>
              <p>
                The Shopping Corporation is a high-tech logistical firm
                primarily focused on the production of low quality product at
                insanely cheep prices. We are based in Los Angeles and named
                after its founder John Shopping.{" "}
              </p>

              <p>
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
              <p>
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for
                offshoring.
              </p>
              <p>
                We capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop on focusing
                solely on the bottom line.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
