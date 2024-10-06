import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Imprint() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Impressum
              </h1>
              <div style={{ padding: 50, textAlign: "center" }}>
                <p>
                  Angaben gemäß § 5 DDG <br />
                  Sebastian Stahl <br />
                  Elisabethstr. 9 <br />
                  50226 Frechen <br />
                  <br />
                  Vertreten durch: Sebastian Stahl <br />
                  <br />
                  Kontakt: <br />
                  Telefon: 015679-074026 <br />
                  E-Mail: hi@sebastianstahl.net <br />
                  <br />
                  Haftungsausschluss: <br />
                  Haftung für Links <br />
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                  für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                  die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich. <br />
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                  mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
                  zum Zeitpunkt der Verlinkung nicht erkennbar. <br />
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten
                  ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
                  nicht zumutbar. <br />
                  Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                  Links umgehend entfernen.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Imprint;
