import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../../landing/Navbar.js';
import CBT1 from '../../images/CBT/CBT3.png';
import CBT2 from '../../images/CBT/CBT3.png';
import CBT3 from '../../images/CBT/CBT3.png';
import CBT4 from '../../images/CBT/CBT3.png';
import CBT5 from '../../images/CBT/CBT3.png';
import CBT6 from '../../images/CBT/CBT3.png';
import CBT7 from '../../images/CBT/CBT3.png';
import Footer from '../../landing/Footer.js';

const CBT = () => {
    const [tasks, setTasks] = useState([]);
  
    useEffect(() => {
      fetchTasks();
    }, []);
  
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/daily-tasks-sessions/4");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching task data:", error);
      }
    };

  return (
    <>
      <Navbar />
      <div className="container text-center">
        <h6 className="section-title mb-2 tfonts"><br />Bangun Kepercayaan Diri, Atasi Depresi: Intervensi CBT Ini Untukmu!<br /><br /></h6>
      </div>

            <div className="container text-left">
                <br></br><br></br>
                <p style={{color:"black", fontWeight:"bold", fontSize:"20px"}}>7 Hari Tantangan Kendalikan Perilaku untuk Mengatasi Depresi</p><br></br>
                <p style={{color:"black",  fontSize:"20px"}}>
                Selamat datang di tantangan 7 hari kendalikan pikiran! Selama seminggu ini, kita akan fokus pada mengenali dan mengubah pola pikir negatif yang dapat berkontribusi terhadap depresi.
                </p>

                <br/>
                <p style={{color:"black",  fontSize:"20px"}}>
                    Setiap hari, kamu akan menerima tugas kecil yang akan membantumu:<br/>
                    - &nbsp;Mengidentifikasi pola perilaku yang tidak sehat<br/>
                    - &nbsp;Membangun kebiasaan yang lebih positif dan produktif<br/>
                    - &nbsp;Meningkatkan motivasi dan disiplin diri<br/>
                    </p>

                <br/>
               
                <div className="container text-center">
            <h3 className="section-title mb-2 tfonts" style={{ borderColor:"#FFD2DD",color:"#25B7D3", fontWeight:"bold"}}><br />Yuk, mulai tantangannya !<br /></h3>
            </div>
                                     
        </div>
        
        <br></br><br></br><br></br><br></br>
    
      <div className="container">
        <div className="row">
        {tasks.map((task) => (
            <TaskCard key={task.id_task} task={task} />
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
    <div className="col-md-3 mb-4" style={{marginLeft:"80px"}}>
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

const TaskCard = ({ task }) => {
  const { no_hari, judul_task, id_task } = task;
  const imageMap = {
    1: CBT1,
    2: CBT2,
    3: CBT3,
    4: CBT4,
    5: CBT5,
    6: CBT6,
    7: CBT7
  };
  const imageSrc = imageMap[no_hari] || CBT3;

return (
  <div className="col-md-3 mb-4" style={{ marginLeft: "80px" }}>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={imageSrc} style={{ height: '600px' }} />
      <Card.Body>
        <Link to={`/daily-task-detail/${id_task}`} className="stretched-link"></Link>
        <Card.Text className="text-center" style={{ height: '50px' }}>Day {no_hari}: {judul_task}</Card.Text>
      </Card.Body>
    </Card>
  </div>
);
};

export default CBT;
