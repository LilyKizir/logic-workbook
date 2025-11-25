import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

const LeftDashboard = () => {
    // 1. Initialize state to track the active view. We start with 'grades'.
    const [activeView, setActiveView] = useState('assignments');

    // 2. Handler function to update the state when a nav link is clicked.
    const handleSelect = (selectedKey) => {
        setActiveView(selectedKey);
    };

    // 3. Function to render the correct content based on the active state.
    const renderContent = () => {
        switch (activeView) {
            case 'assignments':
                return (
                    // Assignments Content
                    
                    <Accordion defaultActiveKey="0">

                        {/* Chapter 1 Accordion Item */}
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Chapter 1</Accordion.Header>
                            <Accordion.Body>
                                <Table striped className="assignment">
                                    <thead>
                                        <tr>
                                            <th>Assignment</th>
                                            <th>Due Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Problem Set 1</td>
                                            <td>2025-05-26 23:59 EDT</td>
                                        </tr>
                                        <tr>
                                            <td>Problem Set 2</td>
                                            <td>2025-12-12 12:00 EST</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* Chapter 2 Accordion Item (Example of a second item) */}
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Chapter 2</Accordion.Header>
                            <Accordion.Body>
                                {/* ... Content for Chapter 2 ... */}
                                This is the content for Chapter 2.
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* Chapter 3 Accordion Item (Example of a third item) */}
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Chapter 3</Accordion.Header>
                            <Accordion.Body>
                                {/* ... Content for Chapter 3 ... */}
                                This is the content for Chapter 3.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
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
                    <Nav.Item>
                        {/* eventKey ties the link click to the state update */}
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

export default LeftDashboard;