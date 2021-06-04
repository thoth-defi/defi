import React from 'react';
import { Card, Button  } from 'react-bootstrap';
import './Content.css';


const Content = ()=>{
    return (
        <div className='d-inline'>
            <div className='ml-5 mr-5 '>
                    <Card.Body>
                    <Card.Img style={{ width: '18rem' }} variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Launch App</Button>
                    </Card.Body>
            </div>

            <div className='blue-gradient color-block-5 mb-3 mx-auto z-depth-1'></div>
        </div>
    )
}

export default Content;
