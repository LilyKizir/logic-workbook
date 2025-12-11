import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuestionList from './QuestionList';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import LogicDropdown from './RuleMenu';


const ArgumentBox = () => {

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Row>
                        <Col xs={4}>
                            <Form.Control />
                        </Col>
                        <Col>
                            <LogicDropdown/>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
        </>
    );
};

export default ArgumentBox;