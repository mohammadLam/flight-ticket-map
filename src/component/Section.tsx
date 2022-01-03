import React from 'react'
// import SeatInterface from '../interface/Seat'
import window from '../img/window.svg'
import aisle from '../img/aisle.svg'
import middle from '../img/middle.svg'

interface Props {
    sections: { type: string; index: number; value?: number }[][]
}

const Section: React.FC<Props> = ({ sections }) => {
    return (
        <div className={`gap-2 content-start`}>
            {sections.map((row, rowIndex) => (
                <div className='flex' key={rowIndex}>
                    {row.map((seat, seatIndex) => (
                        <div className='relative' key={seatIndex}>
                            <img
                                key={seatIndex}
                                className='w-12 m-1'
                                src={
                                    seat.type === 'window'
                                        ? window
                                        : seat.type === 'aisle'
                                        ? aisle
                                        : middle
                                }
                                alt='seat'
                            />
                            <p className='text-2xl font-bold text-center absolute inset-0 m-auto'>
                                {seat.value}
                            </p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Section
