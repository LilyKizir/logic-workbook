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
        const chapters = [
            {
                id: "0",
                title: "Chapter 1",
                assignments: [
                    { name: "Problem Set 1", due: "2025-05-26 23:59 EDT" },
                    { name: "Problem Set 2", due: "2025-12-12 12:00 EST" },
                ]
            },
            { id: "1", title: "Chapter 2", assignments: [] },
            { id: "2", title: "Chapter 3", assignments: [] },
        ];
        switch (activeView) {
            case 'assignments':
                return (
                    // Assignments Content

                    <Accordion defaultActiveKey="0" flush className="shadow-sm border rounded">
                        {chapters.map((chapter) => (
                            <Accordion.Item eventKey={chapter.id} key={chapter.id}>
                                <Accordion.Header className="fw-bold">{chapter.title}</Accordion.Header>
                                <Accordion.Body
                                // className="p-0"
                                > {/* p-0 makes the table flush with edges */}
                                    {chapter.assignments.length > 0 ? (
                                        <Table
                                            // striped
                                            hover
                                            responsive
                                            className="mb-0"
                                        >
                                            <thead className="table-light">
                                                <tr>
                                                    <th>Assignment</th>
                                                    <th>Due Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {chapter.assignments.map((asgn, index) => (
                                                    <tr key={index}>
                                                        <td>{asgn.name}</td>
                                                        <td>{asgn.due}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    ) : (
                                        <div className="p-3 text-muted">No assignments listed for this chapter.</div>
                                    )}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
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