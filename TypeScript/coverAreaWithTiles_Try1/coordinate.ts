export class Coordinate {
    i: number
    j: number

    constructor(i: number, j: number) {
        this.i = i
        this.j = j
    }

    equals(co: Coordinate): boolean {
        return this.i === co.i && this.j === co.j
    }

    isLess(co: Coordinate): boolean {
        return this.i < co.i || (this.i == co.i && this.j < co.j)
    }
}

export class LabeledCoordinate extends Coordinate {
    label: string

    constructor(i: number, j: number, label?: string) {
        super(i,j)
        if (label) this.label = label 
        else this.label = ''
    } 
}