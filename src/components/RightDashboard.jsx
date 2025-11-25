import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import FullWidthGreyRectangleCSS from "./GreyRectangle";

const RightDashboard = () => {
    // 1. Initialize state to track the active view. We start with 'grades'.
    const [activeView, setActiveView] = useState('grades');

    // 2. Handler function to update the state when a nav link is clicked.
    const handleSelect = (selectedKey) => {
        setActiveView(selectedKey);
    };

    // 3. Function to render the correct content based on the active state.
    const renderContent = () => {
        switch (activeView) {
            case 'grades':
                return (
                    <>
                    <h5>Class Average</h5>
                    <h1>100.00%</h1>
                    <h5>Recent Activity</h5>
                    <FullWidthGreyRectangleCSS />
                    </>
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
                        <Nav.Link eventKey="grades">Grades</Nav.Link>
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

export default RightDashboard;

