import React, { useEffect, useState } from 'react';
import { Dropdown, Container, Row, Col } from 'react-bootstrap';

// 2. Custom Toggle Component
const CustomSubMenuToggle = React.forwardRef(({ children, onClick, active }, ref) => (
  <button
    ref={ref}
    className={`nested-toggle ${active ? 'active-submenu' : ''}`} // Optional styling hook
    onClick={(e) => {
      e.preventDefault();
      // Important: Stop propagation so the 'rootClose' listener of the *sibling* dropdowns
      // (which listens on document) doesn't fire and interfere with our state logic.
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      onClick(e);
    }}
  >
    {children}
  </button>
));

export default function LogicDropdown() {
  // State to track which sub-menu is open. 
  // Values: 'conjunction', 'disjunction', 'conditional', 'biconditional', or null.
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  // Helper to toggle specific menus
  const handleSubMenuClick = (key) => {
    setActiveSubMenu(prev => prev === key ? null : key);
  };

  // Helper to handle closing when clicking outside
  const handleRootClose = (key, event) => {
    if (activeSubMenu === key) {
      setActiveSubMenu(null);
    }
  };

  return (
    <>
      <Dropdown onToggle={(isOpen) => !isOpen && setActiveSubMenu(null)}>
        <Dropdown.Toggle variant="primary" id="main-dropdown">
          Select Operator
        </Dropdown.Toggle>

        <Dropdown.Menu>

          {/* ITEM 1: Conjunction */}
          <Dropdown
            drop="end"
            className="d-block"
            show={activeSubMenu === 'conjunction'}
            onToggle={(isOpen, meta) => {
              if (meta.source === 'rootClose') handleRootClose('conjunction');
            }}
          >
            <Dropdown.Toggle
              as={CustomSubMenuToggle}
              onClick={() => handleSubMenuClick('conjunction')}
            >
              Conjunction
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/conjunction-intro">Intro (∧I)</Dropdown.Item>
              <Dropdown.Item href="#/conjunction-elim">Elim (∧E)</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* ITEM 2: Disjunction */}
          <Dropdown
            drop="end"
            className="d-block"
            show={activeSubMenu === 'disjunction'}
            onToggle={(isOpen, meta) => {
              if (meta.source === 'rootClose') handleRootClose('disjunction');
            }}
          >
            <Dropdown.Toggle
              as={CustomSubMenuToggle}
              onClick={() => handleSubMenuClick('disjunction')}
            >
              Disjunction
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/disjunction-intro">Intro (∨I)</Dropdown.Item>
              <Dropdown.Item href="#/disjunction-elim">Elim (∨E)</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* ITEM 3: Conditional */}
          <Dropdown
            drop="end"
            className="d-block"
            show={activeSubMenu === 'conditional'}
            onToggle={(isOpen, meta) => {
              if (meta.source === 'rootClose') handleRootClose('conditional');
            }}
          >
            <Dropdown.Toggle
              as={CustomSubMenuToggle}
              onClick={() => handleSubMenuClick('conditional')}
            >
              Conditional
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/conditional-intro">Intro (→I)</Dropdown.Item>
              <Dropdown.Item href="#/conditional-elim">Elim (→E)</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* ITEM 4: Biconditional */}
          <Dropdown
            drop="end"
            className="d-block"
            show={activeSubMenu === 'biconditional'}
            onToggle={(isOpen, meta) => {
              if (meta.source === 'rootClose') handleRootClose('biconditional');
            }}
          >
            <Dropdown.Toggle
              as={CustomSubMenuToggle}
              onClick={() => handleSubMenuClick('biconditional')}
            >
              Biconditional
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/biconditional-intro">Intro (↔I)</Dropdown.Item>
              <Dropdown.Item href="#/biconditional-elim">Elim (↔E)</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}