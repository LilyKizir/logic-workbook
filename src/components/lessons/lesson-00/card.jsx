import React from 'react'

const LessonCard00 = () => {
    return (
        <div>
            <h3 id='L0'>Lesson 0: Chinese Sound System and Character Composition</h3>
            <hr />
            <div className='bg-light p-3 border'>
                <p>In this lesson we will review:</p>
                <ul>
                    <li>How to identify tones, initial sounds, and final sounds</li>
                    <li>Writing radicals and stroke order</li>
                </ul>
            </div>
            <div className='p-3'>
                <h5>Chinese Sound System</h5>
                <ul>
                    <li>
                        <a href="/attc-companion/lesson-00/initial">Initial Sounds</a>
                    </li>
                    <li>
                        <a href="/attc-companion/lesson-00/final">Final Sounds</a>
                    </li>
                    <li>
                        <a href="/attc-companion/lesson-00/syllables">Syllables</a>
                    </li>
                    <li>
                        <a href="/attc-companion/lesson-00/tones">Tones</a>
                    </li>
                </ul>

                <h5>Character Composition</h5>
                <ul>
                    <li>
                        <a href="/attc-companion/lesson-00/strokes">Strokes</a>
                    </li>
                    <li>
                        <a href="/attc-companion/lesson-00/radicals">Radicals</a>
                    </li>
                    <li>
                        <a href="/attc-companion/lesson-00/components">Character Components</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LessonCard00