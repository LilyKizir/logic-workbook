import React from "react";
import InitialQuiz from "../../components/lessons/lesson-00/initialQuiz";
import { useNavigate } from 'react-router-dom'


const InitialLesson00 = () => {
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
                    <h3>Lesson 0: Initial</h3>
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
                    <h6>Listen to the following audio clips and identify the correct initial sound for each:</h6>
                </div>
                <div className="border p-3">
                    <InitialQuiz />
                </div>
            </div>

        </div>

    )
}

export default InitialLesson00