import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
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
                    <>
                        <Row>
                            <Col xs={3}>
                                <ul class="nav list-group flex-column mb-auto">
                                    <li class="nav-item list-group-item">
                                        <a href="#" class="nav-link active" aria-current="page">
                                            Published Assignments
                                        </a>
                                    </li>
                                    <li class="nav-item list-group-item">
                                        <a href="#" class="nav-link ">
                                            Assign Textbook Problems
                                        </a>
                                    </li>
                                    <li class="nav-item list-group-item">
                                        <a href="#" class="nav-link ">
                                            Assign Uploaded Documents
                                        </a>
                                    </li>
                                    <li class="nav-item list-group-item">
                                        <a href="#" class="nav-link ">
                                            Manage Uploaded Documents
                                        </a>
                                    </li>
                                    <li class="nav-item list-group-item">
                                        <a href="#" class="nav-link ">
                                            Extra Option
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                            <Col>
                                {/* Render the appropriate content based on the state */}
                                <p>Use this form to **Report a bug**.</p>
                            </Col>
                        </Row>
                    </>
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
                {/* Render the appropriate content based on the state */}
                {renderContent()}

            </Card.Body>
        </Card>
    );
};

export default CourseManagementDashboard;