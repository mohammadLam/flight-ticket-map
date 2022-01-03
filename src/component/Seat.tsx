import React from 'react'
import SeatInterface from '../interface/Seat'
import window from '../img/window.svg'
import aisle from '../img/aisle.svg'
import middle from '../img/middle.svg'

interface Props {
    seat: SeatInterface
}

const Seat: React.FC<Props> = ({ seat }) => {
    return (
        <div className='relative'>
            <img
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
            <p className='font-bold mt-3 text-center absolute inset-0'>
                {seat.value}
            </p>
        </div>
    )
}

export default Seat
