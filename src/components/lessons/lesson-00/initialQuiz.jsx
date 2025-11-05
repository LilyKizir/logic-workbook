import React, { useState } from 'react'

const InitialQuiz = () => {

    const [answers, setAnswers] = useState({
        q1: false,
        q2: false,
        q3: false,
        q4: false,
        q5: false,
    })

    const [score, setScore] = useState(0)

    const questions = [
        {
            question: "q1",
            sound: "ji",
            answers: [
                { text: "j", correct: true },
                { text: "q", correct: false },
                { text: "zh", correct: false },
                { text: "ch", correct: false },
            ]
        },
        {
            question: "q2",
            sound: "nu",
            answers: [
                { text: "n", correct: true },
                { text: "l", correct: false },
                { text: "y", correct: false },
                { text: "h", correct: false },
            ]
        },
        {
            question: "q3",
            sound: "zai",
            answers: [
                { text: "c", correct: true },
                { text: "s", correct: false },
                { text: "z", correct: false },
                { text: "zh", correct: false },
            ]
        },
        {
            question: "q4",
            sound: "xian",
            answers: [
                { text: "x", correct: true },
                { text: "sh", correct: false },
                { text: "j", correct: false },
                { text: "q", correct: false },
            ]
        },
        {
            question: "q5",
            sound: "feng",
            answers: [
                { text: "f", correct: true },
                { text: "h", correct: false },
                { text: "b", correct: false },
                { text: "p", correct: false },
            ]
        },
    ]

    const handleSubmit = e => {

        e.preventDefault();

        let count = 0;

        for (let question in answers) {
            if (answers[question] === 'true') {
                count++;
            }

        }

        setScore(count)

    };

    return (
        <div className=''>
            <form onSubmit={handleSubmit}>
                {questions.map(question => (
                    <div key={question.question} className="d-flex align-items-center">
                        <div>
                            <label className="col-sm-1 col-form-label">
                                <div className='btn btn-info'>{question.question}</div>
                            </label>
                        </div>

                        <div>

                            {question.answers.map(answer => (
                                <label className='mx-1' key={answer.text}>
                                    <input
                                        className='mx-1'
                                        type="radio"
                                        name={question.question}
                                        value={answer.correct}
                                        onChange={e => setAnswers({ ...answers, [question.question]: e.target.value })}
                                    />
                                    {answer.text}
                                </label>
                            ))}

                        </div>
                    </div>
                ))}
                <div className='d-flex justify-content-center'>
                    <button type="submit" className='btn btn-primary'>
                        SUBMIT
                    </button>
                </div>
                <div className='d-flex justify-content-center'>
                    <p>Score: {score}/5</p>
                </div>

            </form>
        </div>
    )
}

export default InitialQuiz