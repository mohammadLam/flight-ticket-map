export type seat_type = 'window' | 'aisle' | 'middle'

export default interface SeatInterface {
    type: seat_type
    value?: number
}
