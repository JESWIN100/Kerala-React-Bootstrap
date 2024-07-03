import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { DUMMY_DATA } from '../json/data'; // Assuming DUMMY_DATA is correctly imported

function DetailsPage() {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const selectedItem = DUMMY_DATA.find(item => item.id === parseInt(id, 10));
        setItem(selectedItem);
    }, [id]);

    if (!item) {
        return <div>Loading...</div>; // Consider using a spinner or loader component here
    }

    return (
        <Container className="d-flex justify-content-center align-items-center " style={{ height: '100vh' }}>
            <Row >
                <Col md={12} className='shadow-lg p-3 mb-5 bg-warning rounded'>
                    <Card className="shadow-sm shadow-lg p-3 mb-5 bg-white rounded" style={{ maxWidth: '600px', margin: 'auto' }}>
                        <Card.Img variant="top" src={item.imageUrl} style={{ height: '400px', objectFit: 'cover' }} />
                        <Card.Body className=''>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default DetailsPage;
