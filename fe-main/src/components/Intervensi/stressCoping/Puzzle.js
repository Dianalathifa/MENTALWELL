import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Navbar from '../../landing/Navbar.js';
import Footer from '../../landing/Footer.js';
import puzzle from '../../images/stressCoping/puzzleandgame.png';
import jigsaw from '../../images/stressCoping/jigsawexplorer.png';
import crazy from '../../images/stressCoping/crazygame.png';
import fun from '../../images/stressCoping/fungame.png';
import blob from '../../images/stressCoping/bloboperagame.png';


const JenisPuzzle = [
  { name: "Jigsaw Explorer", link: "https://www.jigsawexplorer.com/" },
  { name: "Crazy Game", link: "https://www.crazygames.com/" },
  { name: "Fun Game", link: "https://www.safekidgames.com/popular-games/" },
  { name: "Blob Opera Game", link: "https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw?hl=en&cp=e30" },
  // Add other activities with their corresponding links here
];

const GambarPuzzle = [jigsaw, crazy, fun, blob];

const Puzzle = () => {
  return (
    <>
      <Navbar />
      <section className="section before-content" style={{ backgroundColor: "#C6BCCA", color: "#141313", marginTop: "100px", paddingTop: "100px", padding: "70px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: "100%", backgroundColor: "white", zIndex: 1 }}></div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <Col md={16} className="d-flex align-items-center justify-content">
            <div className="container text-center">
              <h6 className="tfonts-2" style={{ fontWeight: "bold", color: "white" }}>Puzzle & Game</h6>
            </div>
          </Col>
          <br /><br /><br />
          <div className="container text-center">
            <img src={puzzle} style={{ width: "400px", height: "300", maxWidth: "100%", maxHeight: "100%" }} alt="kegiatan" />
          </div>
        </div>
      </section>

      <Container className="mt-3" style={{ maxWidth: '800px',  marginBottom:"50px" }}>
        <Col md={16} className="d-flex align-items-center justify-content">
          <div className="container text-center">
            <p style={{ fontSize: "16px", fontWeight: "bold", color: "#7F91D8" }}>
            "Beri diri Anda waktu istirahat untuk meredakan stres dengan menyusun  puzzle atau bermain game online! Ambil waktu sejenak untuk menikmati  kegiatan yang menyenangkan ini. 
            Manfaatkan waktu tersebut dan biarkan  diri Anda terfokus sepenuhnya pada aktivitas ini. 
            Anda akan merasakan  kesegaran baru dan ketenangan saat Anda menyelesaikan puzzle atau  mengeksplorasi permainan online. 
            Rasakan betapa menyenangkannya kegiatan  ini dan bagaimana hal tersebut dapat menghilangkan stres dalam  sekejap."</p>
          </div>
        </Col>
        <br /><br /><br />
      </Container>

      <Container className="mt-3">
        <Row xs={1} md={2} className="g-4 justify-content-center">
          {JenisPuzzle.map((jenis, index) => (
            <Card key={index} style={{ borderRadius: "20px", fontWeight: "bold", fontSize: "16px", height: "250px", width: "250px", backgroundColor: "#C6BCCA", color: "#25B7D3", margin: "20px" }}>
              <a href={jenis.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#4A4A4A" }}>
                <Card.Img variant="top" src={GambarPuzzle[index]} style={{ height: "180px", objectFit: "cover", borderRadius: "20px", marginTop:"10px" }} />
                <Card.Body>
                  <Card.Text style={{ textAlign: "center" }}>{jenis.name}</Card.Text>
                </Card.Body>
              </a>
            </Card>
          ))}
        </Row>
      </Container>
      <br /><br /><br /><br />
      <Footer />
    </>
  );
};

export default Puzzle;
