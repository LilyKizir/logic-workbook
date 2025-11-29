import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import QuestionList from './QuestionList';

const Proofs = () => {
    return (
        <>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Proof Set 1</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row>
                        {/* 'col-2' becomes xs={2} (or md={2} for responsive behavior) */}
                        <QuestionList/>

                        {/* 'col' becomes standard Col which takes up remaining space */}
                        <Col>
                            <Card>
                                <Card.Header>
                                    <p className="mb-0">Some instructions</p>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Some Content
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
};

export default Proofs;