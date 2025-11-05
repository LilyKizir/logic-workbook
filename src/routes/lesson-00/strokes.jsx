import React from "react";
import StrokesQuiz from "../../components/lessons/lesson-00/strokesQuiz";
import { useNavigate } from 'react-router-dom'


const StrokesLesson00 = () => {
    let navigate = useNavigate();

    const handleBack = () => {
        navigate(`../`);
    }

    return (
        <div>
            <div className="container">
                <div>
                    <button className="btn btn-info mb-3" onClick={handleBack}>BACK</button>
                </div>
                <div >
                    <h3>Lesson 0: Strokes</h3>
                </div>
                <div >
                    <p>there can be a reference here to:</p>
                    <ul>
                        <li>textbook pages</li>
                        <li>slides</li>
                        <li>other relevant resources?</li>
                    </ul>


                </div>
                <div className="bg-info p-3">
                    <h6>Select the correct name for the following strokes:</h6>
                </div>
                <div className="border p-3">
                    <StrokesQuiz />
                </div>
            </div>

        </div>

    )
}

export default StrokesLesson00