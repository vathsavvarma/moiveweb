import Carousel from 'react-bootstrap/Carousel';
import slide2 from './photos/banner1.jpg';
import slide1 from './photos/banner2.jpeg';
import slide3 from './photos/banner3.webp';

function Slides() {
  return (
    <div style={{background: '#FFFFFF'}}>
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
            style={{height:'90vh',margin:'auto'}}
            />
            {/* <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
            style={{height:'90vh',margin:'auto'}}
            />
            {/* <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
            style={{height:'90vh',margin:'auto'}}
            />
            {/* <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption> */}
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Slides;