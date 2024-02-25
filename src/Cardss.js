import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Navigate } from 'react-router-dom';
import React from 'react';
import dataa from './videoData.json';

function Cardss({videoId}) {
  const [display,setDisplay] = React.useState(false);
    if(display){
        return <Navigate to={`https://vathsavvarma.github.io/moiveweb/playing/${videoId}`} />
    }
    // console.log(dataa.info[videoId-1]);
    const store = dataa.info[videoId-1];
  return (
    <Card style={{ width: '18rem',  marginTop:'1rem' }}>
      <Card.Img variant="top" src={store.pic} style={{height:'50vh'}}/>
      <Card.Body>
        <Card.Title>{store.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={()=>{setDisplay(true);}} variant="primary">See Teaser</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardss;