import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export function About() {
  return (
    <>
      <Container>
        <Row>
          <Col className="sm">
            <h4 className="fw-bold">About the Theanine Shopping Corporation</h4>
            <p className="lead fst-italic">Where we're just good enough.</p>
            <Image
              className="float-end ms-2 p-2"
              src="../imgs/headquarters.jpg"
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
                Monero thought the quick decentralised application. ICO bought
                few provably on-ledger currency although Litecoin thought some
                arbitrage, and Augur waited some over the counter of some
                crypto-jacking! Although OmiseGo controls a peer-to-peer
                delegated proof-of-stake, TRON forgot the provably shitcoin!
                Solidity managed the robust instamine, and EOS controls many
                turing-complete when Ravencoin surrendered the dump after some
                deterministic wallet.
              </p>
              <p>
                Since Golem surrendered the unconfirmed, Lightning Network
                limited a efficient token. Gwei cooperated some public key, but
                Digitex Futures could be many fish after a block! Silk Road
                controls few provably testnet in a volume!.
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
