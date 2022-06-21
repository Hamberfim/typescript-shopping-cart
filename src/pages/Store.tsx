import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Store() {
  return (
    <>
      <h1>Store Page</h1>
      <Row xs={1} md={2} lg={4} className="g-2">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
