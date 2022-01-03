import React from 'react'
import Seat from './Seat'
import SeatInterface from '../interface/Seat'

interface Props {
    sections: SeatInterface[][]
}
// flex gap-8 justify-between
// ;`grid grid-cols-4 gap-6`
const Section: React.FC<Props> = ({ sections }) => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                justifyItems: 'center'
            }}>
            {sections.map((row, rowIndex) => (
                <div className={`flex`} key={rowIndex}>
                    {row.map((seat, seatIndex) => (
                        <Seat seat={seat} key={seatIndex} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Section
