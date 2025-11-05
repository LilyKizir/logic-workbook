import React from "react"

const Links = () => {
    return (
        <div className="mb-4">
            <h5>Page Links</h5>
            <div className="d-flex justify-content-start">
                <button className="btn btn-primary me-2">Anki Decks</button>
                <button className="btn btn-success me-2">Quizlet Decks</button>
                <button className="btn btn-warning me-2">Help and FAQ</button>
                <button className="btn btn-danger me-2">Reports and Feedback</button>
                <button className="btn btn-info me-2">Github</button>
            </div>
        </div>
    )
}

export default Links