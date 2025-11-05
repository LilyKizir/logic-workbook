import React from 'react'

const LessonCard01 = () => {
    return (
        <div>
            <h3 id='L1'>Chapter 1: Key notions of logic</h3>
            <hr />
            <div className='bg-light p-3 border'>
                <p>In this lesson we learned:</p>
                <ul>
                    <li>What an argument is in logic, and how to identify its two key parts: premises and a conclusion.</li>
                    <li>How to use premise and conclusion indicator words (like 'since' or 'therefore') to separate the parts of an argument.</li>
                    <li>The specific definition of a sentence in logic: a statement that must be capable of being true or false.</li>
                </ul>
            </div>
            <div className='p-3'>
                <h5>Exercises</h5>
                <ul>
                    <li>
                        <a href="/logic-workbook/chapter-01/exercise-01">1.1 Finding the conclusion</a>
                    </li>

                </ul>

                <h5>Extras</h5>
                <ul>
                    <li>
                        <a href="">Extra1</a>
                    </li>
                    <li>
                        <a href="">Extra2</a>
                    </li>
                    <li>
                        <a href="">Extrra3</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LessonCard01