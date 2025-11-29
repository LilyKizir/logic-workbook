import React, { useState } from 'react';
import { Col, ListGroup } from 'react-bootstrap';

const QuestionList = () => {
    const [activeId, setActiveId] = useState(1);

    // Your data source
    const questions = [
        { id: 1, text: "Question 1" },
        { id: 2, text: "Question 2" },
        { id: 3, text: "Question 3" },
        { id: 4, text: "Question 4" },
        { id: 5, text: "Question 5" },
    ];

    return (
        <Col xs={2}>
            <ListGroup>
                {questions.map((q) => (
                    <ListGroup.Item
                        key={q.id}
                        action
                        active={activeId === q.id}
                        onClick={() => setActiveId(q.id)}
                    >
                        {q.text}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Col>
    );
}

export default QuestionList;