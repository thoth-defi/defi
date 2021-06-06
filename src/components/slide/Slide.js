import React from 'react';
import { Carousel,} from 'react-bootstrap';
import bg from './bg.jpg';
// import img1 from './img1.jpg';




const Slide = () => {

    return (
        <Carousel fade>
            <Carousel.Item>
                <img 
                    className="d-inline w-20" src = {bg}
                    //  {src="holder.js/800x400?text=First slide&bg=373940"}
                    alt="First slide"
                />
                {/* <Carousel.Caption> */}
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                {/* </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-inline w-2"
                    src={""}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Slide;