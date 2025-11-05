import React, { useState } from 'react'

const ToneQuiz = () => {

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
            answers: [
                { text: "xī", correct: true },
                { text: "xí", correct: false },
                { text: "xǐ", correct: false },
                { text: "xì", correct: false },
            ]
        },
        {
            question: "q2",
            answers: [
                { text: "fū", correct: true },
                { text: "fú", correct: false },
                { text: "fǔ", correct: false },
                { text: "fù", correct: false },
            ]
        },
        {
            question: "q3",
            answers: [
                { text: "shī", correct: true },
                { text: "shí", correct: false },
                { text: "shǐ", correct: false },
                { text: "shì", correct: false },
            ]
        },
        {
            question: "q4",
            answers: [
                { text: "cāo", correct: true },
                { text: "cáo", correct: false },
                { text: "cǎo", correct: false },
                { text: "cào", correct: false },
            ]
        },
        {
            question: "q5",
            answers: [
                { text: "luō", correct: true },
                { text: "luó", correct: false },
                { text: "luǒ", correct: false },
                { text: "luò", correct: false },
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

export default ToneQuiz