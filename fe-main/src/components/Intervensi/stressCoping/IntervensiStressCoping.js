import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../../landing/Navbar.js';
import ringan1 from '../../images/stressCoping/stressringan1.png';
import ringan2 from '../../images/stressCoping/stressringan2.png';
// import ringan3 from '../../images/stressCoping/stressringan3.png';
import ringan3 from '../../images/stressCoping/stressringan3.png';
import ringan4 from '../../images/stressCoping/stressringan4.png';
import Footer from '../../landing/Footer.js';

const StressCoping = () => {
  const stressCoping = [
    { id: 1, image: ringan1, text: "Section 1", link: "/grateful" },
    { id: 2, image: ringan2, text: "Section 2", link: "/do-not-anything" },
    { id: 4, image: ringan3, text: "Section 3", link: "/coloring" },
    { id: 5, image: ringan4, text: "Section 4", link: "/game" }
  ];

  return (
    <>
      <Navbar />
      <div className="container text-center">
        <h6 className="section-title mb-2 tfonts"><br />Stress Coping Strategies<br /><br /></h6>
      </div>
      <div className="container">
        <div className="row">
          {stressCoping.map((stressCoping) => (
            <InterventionCard key={stressCoping.id} intervention={stressCoping} />
          ))}
        </div>
      <br/><br/><br/><br/>
      </div>
      

      <Footer />
    </>
  );
};

const InterventionCard = ({ intervention }) => {
  const { image, text, link } = intervention;
  return (
    <div className="col-md-3 mb-3">
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={image} style={{ height: '600px' }} />
        <Card.Body>
          <Link to={link} className="stretched-link"></Link>
          <Card.Text className="text-center" style={{ height: '50px' }}>{text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StressCoping;