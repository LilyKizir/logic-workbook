import React from "react";
import { useNavigate } from 'react-router-dom'


const Exercise01 = () => {
    let navigate = useNavigate();

    const handleBack = () => {
        navigate(`../`);
    }

    return (
        <div>
            <div className="px-5 py-3">
                <div>
                    <button className="btn btn-info mb-3" onClick={handleBack}>BACK</button>
                </div>
                <div >
                    <h3>Lesson -999: Subtopic</h3>
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
                    <h6>Here is where the main take goes:</h6>
                </div>
                <div className="border p-3">
                    <li>
                    It is sunny. So I should take my sunglasses.
                    </li>
                    <li>
                    ​It must have been sunny. I did wear my sunglasses, after all.
                    </li>
                    <li>
                    ​No one but you has had their hands in the cookie-jar. And the scene of the crime is littered with cookie-crumbs. You’re the culprit!
                    </li>
                    <li>
                    ​Miss Scarlett and Professor Plum were in the study at the time of the murder. Reverend Green had the candlestick in the ballroom, and we know that there is no blood on his hands. Hence Colonel Mustard did it in the kitchen with the lead pipe. Recall, after all, that the gun had not been fired.
                    </li>
                </div>
            </div>

        </div>

    )
}

export default Exercise01