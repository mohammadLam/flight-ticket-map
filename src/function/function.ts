import SeatInterface from '../interface/Seat'

export const getSeatDetails = (
    seatsMap: number[][][],
    passanger: number = 30
) => {
    // for track seat no

    let array: SeatInterface[][][] = seatsMap.map((section, sectionindex) => {
        // section index = 0 or section = last section
        if (sectionindex === 0 || sectionindex === seatsMap.length - 1) {
            return section.map((row, rowIndex) =>
                row.map((seat, seatIndex) => {
                    // if first section then true
                    if (sectionindex === 0) {
                        // first index
                        if (seatIndex === 0) {
                            return {
                                type: 'window'
                            }
                        }
                        // if last section then true
                        else if (seatIndex === row.length - 1) {
                            return {
                                type: 'aisle'
                            }
                        }
                        // otherwise
                        else {
                            return {
                                type: 'middle'
                            }
                        }
                    } else if (sectionindex === seatsMap.length - 1) {
                        // window seat
                        if (seatIndex === row.length - 1) {
                            return {
                                type: 'window'
                            }
                        }
                        // if last section then true
                        else if (seatIndex === 0) {
                            return {
                                type: 'aisle'
                            }
                        } else {
                            return {
                                type: 'middle'
                            }
                        }
                    } else {
                        return {
                            type: 'aisle'
                        }
                    }
                })
            )
        } else {
            return section.map((row, rowIndex) =>
                row.map((seat, seatIndex) => {
                    if (seatIndex === 0) {
                        return {
                            type: 'aisle'
                        }
                    }
                    // if last section then true
                    else if (seatIndex === row.length - 1) {
                        return {
                            type: 'aisle'
                        }
                    } else {
                        return {
                            type: 'middle'
                        }
                    }
                })
            )
        }
    })

    return seatNoGenerator(array, passanger)
}

export const patternToArray = (pattern: [number, number]) => {
    const array: number[][] = []
    let breakCountDown: number = 1
    let rows: number[] = []
    const loopTimes = pattern[0] * pattern[1]

    for (let i = 0; i < loopTimes; i++) {
        rows.push(i)

        if (breakCountDown === pattern[0]) {
            array.push(rows)
            rows = []
            breakCountDown = 0
        }
        breakCountDown++
    }
    return array
}

export const seatNoGenerator = (
    seatPlan: SeatInterface[][][],
    passanger: number = 30
) => {
    let count: number = 1
    let output: SeatInterface[][][] = []
    let totalRow: number = 0

    seatPlan.map(
        section =>
            (totalRow = totalRow < section.length ? section.length : totalRow)
    )

    for (let i = 0; i < totalRow; i++) {
        const res = seatPlan.map(d => d[i] || [])
        output.push(res)
    }

    const aisle = output.map(section =>
        section.map(row =>
            row.map(seat => {
                if (seat.type === 'aisle') {
                    return {
                        ...seat,
                        value: count <= passanger ? count++ : undefined
                    }
                }
                return seat
            })
        )
    )

    const windowSeat = aisle.map(section =>
        section.map(row =>
            row.map(seat => {
                if (seat.type === 'window') {
                    return {
                        ...seat,
                        value: count <= passanger ? count++ : undefined
                    }
                }
                return seat
            })
        )
    )

    return windowSeat.map(section =>
        section.map(row =>
            row.map(seat => {
                if (seat.type === 'middle') {
                    return {
                        ...seat,
                        value: count <= passanger ? count++ : undefined
                    }
                }
                return seat
            })
        )
    )
}
