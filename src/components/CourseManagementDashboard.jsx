import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CourseManagementDashboard = () => {
    // 1. Initialize state to track the active view. We start with 'grades'.
    const [activeView, setActiveView] = useState('course');

    // 2. Handler function to update the state when a nav link is clicked.
    const handleSelect = (selectedKey) => {
        setActiveView(selectedKey);
    };

    // 3. Function to render the correct content based on the active state.
    const renderContent = () => {
        switch (activeView) {
            case 'course':
                return (
                    // Report a Bug Content
                    <p>Use this form to **Report a bug**.</p>
                );

            case 'students':
                return (
                    // Report a Bug Content
                    <p>Use this form to **Report a bug**.</p>
                );

            case 'assignments':
                return (
                    // Report a Bug Content
                    <p>Use this form to **Report a bug**.</p>
                );


            case 'bug':
                return (
                    // Report a Bug Content
                    <p>Use this form to **Report a bug**.</p>
                );

            default:
                return null;
        }
    };

    return (
        <Card>
            <Card.Header>
                <Nav
                    variant="tabs"
                    // Set the active link based on the state
                    activeKey={activeView}
                    // Update state when a link is clicked
                    onSelect={handleSelect}
                    className="card-header-tabs"
                >
                    {/* eventKey ties the link click to the state update */}
                    <Nav.Item>
                        <Nav.Link eventKey="course">Course Overview</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="students">Students</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="assignments">Assignments</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="bug">Report a bug</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>

            <Card.Body>
                <Row>
                    <Col xs={2}>
                        <ul class="nav flex-column mb-auto">
                            <li class="nav-item">
                                <a href="#" class="nav-link active" aria-current="page">
                                    Published Assignments
                                </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link ">
                                    Assigment manager
                                </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link ">
                                    Upload Documents
                                </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link ">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link ">
                                    Customers
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        {/* Render the appropriate content based on the state */}
                        {renderContent()}
                    </Col>
                </Row>

            </Card.Body>
        </Card>
    );
};

export default CourseManagementDashboard;