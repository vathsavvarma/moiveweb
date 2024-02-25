import 'bootstrap/dist/css/bootstrap.min.css';
import Navvbar from './Navvbar';
import Slides from './Slides';
import Cardss from './Cardss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Msg from './Msg';
// import { Navigate } from 'react-router-dom';

function Home() { 
  return (
    <div>
      <Msg />
      <Navvbar />
      <Slides />
      <Container>
        <Row>
          <Col><Cardss videoId={1}/></Col>
          <Col><Cardss videoId={2}/></Col>
          <Col><Cardss videoId={3}/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
