import _ from 'lodash'

export const getSeatDetails = (
    seatsMap: number[][][],
    passanger: number = 30
) => {
    // for track seat no

    let array: SeatDetails[][][] = seatsMap.map((section, sectionindex) => {
        // section index = 0 or section = last section
        if (sectionindex === 0 || sectionindex === seatsMap.length - 1) {
            return section.map((row, rowIndex) =>
                row.map((seat, seatIndex) => {
                    // if first section then true
                    if (sectionindex === 0) {
                        // first index
                        if (seatIndex === 0) {
                            return {
                                type: 'window',
                                index: rowIndex
                            }
                        }
                        // if last section then true
                        else if (seatIndex === row.length - 1) {
                            return {
                                type: 'aisle',
                                index: rowIndex
                            }
                        }
                        // otherwise
                        else {
                            return {
                                type: 'middle',
                                index: rowIndex
                            }
                        }
                    } else if (sectionindex === seatsMap.length - 1) {
                        // window seat
                        if (seatIndex === row.length - 1) {
                            return {
                                type: 'window',
                                index: rowIndex
                            }
                        }
                        // if last section then true
                        else if (seatIndex === 0) {
                            return {
                                type: 'aisle',
                                index: rowIndex
                            }
                        } else {
                            return {
                                type: 'middle',
                                index: rowIndex
                            }
                        }
                    } else {
                        return {
                            type: 'aisle',
                            index: rowIndex
                        }
                    }
                })
            )
        } else {
            return section.map((row, rowIndex) =>
                row.map((seat, seatIndex) => {
                    if (seatIndex === 0) {
                        return {
                            type: 'aisle',
                            index: rowIndex
                        }
                    }
                    // if last section then true
                    else if (seatIndex === row.length - 1) {
                        return {
                            type: 'aisle',
                            index: rowIndex
                        }
                    } else {
                        return {
                            type: 'middle',
                            index: rowIndex
                        }
                    }
                })
            )
        }
    })

    return seatNoGenerator(array)
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

interface SeatDetails {
    type: 'window' | 'aisle' | 'middle'
    index: number
    value?: number
}

const transpose = (a: any[][]) => {
    return Object.keys(a[0]).map(c => {
        return a.map(r => r[Number(c)])
    })
}

export const seatNoGenerator = (seatPlan: SeatDetails[][][]) => {
    let count: number = 0
    // let isEnterd = false
    let total = 39
    let passanger = 30
    let seatInfo = {
        aisle: 0,
        window: 0,
        middle: 0
    }

    let array: SeatDetails[][][] = []
    seatPlan.map(section =>
        section.map(row =>
            row.map(v => {
                if (v.type === 'aisle') {
                    seatInfo.aisle = seatInfo.aisle + 1
                } else if (v.type === 'window') {
                    seatInfo.window = seatInfo.window + 1
                } else {
                    seatInfo.middle = seatInfo.middle + 1
                }
                return v
            })
        )
    )
    let storeSeat = {
        aisle: 0,
        window: 0,
        middle: 0
    }
    // console.log(seatInfo)

    // array = seatPlan.map((section, sectionIndex) => {
    //     if (sectionIndex === 0 || sectionIndex === seatPlan.length - 1) {
    //         return section
    //     } else {
    //         return section.map((row, rowIndex) => {
    //             return row.map((seat, seatIndex) => {
    //                 if (seat.type === 'aisle') {
    //                     storeSeat.aisle++
    //                     let value = storeSeat.aisle
    //                     return { ...seat, value }
    //                 } else {
    //                     storeSeat.middle++
    //                     let value =
    //                         seatInfo.aisle + seatInfo.window + storeSeat.middle
    //                     return { ...seat, value }
    //                 }
    //             })
    //         })
    //     }
    // })

    let row: SeatDetails[][] = []
    let output: SeatDetails[][][] = []

    // for (let k = 0; k < 4; k++) {
    for (let i = 0; i < seatPlan.length; i++) {
        for (let j = 0; j < seatPlan[i].length; j++) {
            if (j === i) {
                row.push([...seatPlan[i][j]])
            }
        }
        output.push([...row])
        row = []
    }
    // }
    console.log(output)

    return output
}
