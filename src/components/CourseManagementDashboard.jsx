import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuestionList from './QuestionList';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const CourseManagementDashboard = () => {
    // 1. Initialize state to track the active view. We start with 'grades'.
    const [activeView, setActiveView] = useState('course');

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
                    { name: "Problem Set 1", due: "23:59", score: "60/90" },
                    { name: "Problem Set 2", due: "12:00", score: "60/60" },
                ]
            },
            {
                id: "1", title: "Chapter 2",
                assignments: [
                    { name: "Problem Set 1", due: "--:--", score: "--/--" },
                    { name: "Problem Set 2", due: "--:--", score: "--/--" },
                ]
            },
            { id: "2", title: "Chapter 3", assignments: [] },
        ];
        const students = [
            {
                id: "0",
                title: "Jane Doe",
                assignments: [
                    { name: "Problem Set 1", due: "23:59", score: "1/1" },
                    { name: "Problem Set 2", due: "12:00", score: "1/2" },
                ]
            },
            {
                id: "1", title: "John Smith",
                assignments: [
                    { name: "Problem Set 1", due: "--:--", score: "--/--" },
                    { name: "Problem Set 2", due: "--:--", score: "--/--" },
                ]
            },
            { id: "2", title: "First Last", assignments: [] },
        ];
        const course_assignments = [
            {
                id: "0",
                title: "Chapter 1: Syntax",
                assignments: [
                    { name: "Problem Set 1", due: "12/12/25 23:59", score: "12/12/25 12:00" },
                    { name: "Problem Set 2", due: "12/12/25 12:00", score: "12/12/25 12:00" },
                ]
            },
            {
                id: "1", title: "Chapter 2: Truth tables",
                assignments: [
                    { name: "Problem Set 1", due: "--:--", score: "--/--" },
                    { name: "Problem Set 2", due: "--:--", score: "--/--" },
                ]
            },
            { id: "2", title: "Chapter 3: Natural Deduction", assignments: [] },
        ];
        switch (activeView) {
            case 'course':
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
                                                    <th>Average Time</th>
                                                    <th>Success Rate</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {chapter.assignments.map((asgn, index) => (
                                                    <tr key={index}>
                                                        <td>{asgn.name}</td>
                                                        <td>{asgn.due}</td>
                                                        <td>{asgn.score}</td>
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

            case 'students':
                return (
                    // Assignments Content
                    <>
                        <Accordion defaultActiveKey="0" flush className="mb-3 shadow-sm border rounded">
                            {students.map((student) => (
                                <Accordion.Item eventKey={student.id} key={student.id}>
                                    <Accordion.Header className="fw-bold">
                                        <div className="d-flex justify-content-between align-items-center w-100">
                                            {/* Title stays on the left */}
                                            <span>{student.title}</span>

                                            {/* Buttons grouped on the right */}
                                            <div className="me-3"> {/* Added margin-end to prevent overlap with the accordion arrow */}
                                                <Button className='me-2' variant="secondary" onClick={(e) => e.stopPropagation()}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                                                        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                                                    </svg>
                                                </Button>
                                            </div>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body
                                    // className="p-0"
                                    > {/* p-0 makes the table flush with edges */}
                                        {student.assignments.length > 0 ? (
                                            <Table
                                                // striped
                                                hover
                                                responsive
                                                className="mb-0"
                                            >
                                                <thead className="table-light">
                                                    <tr>
                                                        <th>Assignment</th>
                                                        <th>Average Time</th>
                                                        <th>Success Rate</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {student.assignments.map((asgn, index) => (
                                                        <tr key={index}>
                                                            <td>{asgn.name}</td>
                                                            <td>{asgn.due}</td>
                                                            <td>{asgn.score}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        ) : (
                                            <div className="p-3 text-muted">No assignments listed for this student.</div>
                                        )}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                        <Button variant="secondary">Add new student</Button>
                    </>
                );

            case 'assignments':
                return (
                    <>
                        <Accordion defaultActiveKey="0" flush className="mb-3 shadow-sm border rounded">
                            {course_assignments.map((assign) => (
                                <Accordion.Item eventKey={assign.id} key={assign.id}>
                                    <Accordion.Header className="fw-bold">{assign.title}</Accordion.Header>
                                    <Accordion.Body
                                    // className="p-0"
                                    > {/* p-0 makes the table flush with edges */}
                                        {assign.assignments.length > 0 ? (
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
                                                        <th>Hard Deadline</th>
                                                        <th>Total Points</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {assign.assignments.map((asgn, index) => (
                                                        <tr key={index}>
                                                            <td>{asgn.name}</td>
                                                            <td>{asgn.due}</td>
                                                            <td>{asgn.score}</td>
                                                            <th>5</th>
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
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary">Add new chapter</Button>
                            <Button variant="secondary">Add new assignment</Button>
                        </ButtonGroup>
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