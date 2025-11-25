import Nav from 'react-bootstrap/Nav';
import React, { useState } from 'react';


function MockupSwitcher({ activeView, setActiveView }) {

  // 2. Handler function to update the state when a nav link is clicked.
  const handleSelect = (selectedKey) => {
    setActiveView(selectedKey);
  };

  return (
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
        <Nav.Link eventKey="auth">Auth</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="students">Students</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="instructor">Instructor</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="proof">Proof</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default MockupSwitcher;