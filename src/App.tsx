import React, { useState } from 'react'
import { getSeatDetails, patternToArray } from './function/function'
import Section from './component/Section'

function App() {
    const [passanger, setPassanger] = useState(30)

    const seatPattern: [number, number][] = [
        [3, 2],
        [4, 3],
        [2, 3],
        [3, 4]
    ]

    const seatsMap = seatPattern.map(pattern => patternToArray(pattern))
    const seatPlan = getSeatDetails(seatsMap, passanger)

    return (
        <div className='w-max mx-auto'>
            <div className='mt-40'>
                <h1 className='text-4xl font-light text-center mb-3'>
                    Input Section
                </h1>

                <div>
                    <p>Number of passengers</p>
                    <input
                        type='number'
                        value={passanger}
                        onChange={e => setPassanger(Number(e.target.value))}
                        className='border px-3 py-2 outline-none  z-10'
                    />
                </div>
            </div>

            <div className='mt-12'>
                {seatPlan.map((section, sectionIndex) => (
                    <Section sections={section} key={sectionIndex} />
                ))}
            </div>
        </div>
    )
}

export default App
