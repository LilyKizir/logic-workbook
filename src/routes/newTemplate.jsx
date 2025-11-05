import { useNavigate } from 'react-router-dom'


const template = () => {
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
                    You would import activity here
                </div>
            </div>

        </div>

    )
}

export default template