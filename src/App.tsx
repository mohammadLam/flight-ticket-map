import React, { useState } from 'react'
import { getSeatDetails, patternToArray } from './function/function'
import Section from './component/Section'

function App() {
    const seatPattern: [number, number][] = [
        [3, 2],
        [4, 3],
        [2, 3],
        [3, 4]
    ]

    const seatsMap = seatPattern.map(pattern => patternToArray(pattern))
    const [seatPlan] = useState(getSeatDetails(seatsMap))

    return (
        <div className='w-max mx-auto'>
            <div className='flex gap-12 mt-16'>
                {seatPlan.map((section, sectionIndex) => (
                    <Section sections={section} key={sectionIndex} />
                ))}
            </div>
        </div>
    )
}

export default App
