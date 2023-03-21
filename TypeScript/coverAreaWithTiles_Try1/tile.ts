import { Coordinate } from './coordinate'

export class Tile {
    coordinates: Coordinate[]
    label: string

    constructor(coordinates: Coordinate[], label: string) {
        this.coordinates = coordinates
        this.label = label
    }

    normalize() {
        this.coordinates.sort((a, b) => {
            if (a.i !== b.i) return a.i - b.i
            else return a.j - b.j 
        })
        const firstCo: Coordinate = new Coordinate(this.coordinates[0].i, this.coordinates[0].j)
        this.coordinates.forEach(co => {
            co.i = co.i - firstCo.i
            co.j = co.j - firstCo.j 
        })
    }

    shiftedTileToCoordinate(toCoordinate: Coordinate): Tile {        
        this.normalize()
        return new Tile(this.coordinates.map(x => new Coordinate(x.i + toCoordinate.i, x.j + toCoordinate.j)), this.label)
    }

    rotatedTile(): Tile {
        const rotatedTile = new Tile(this.coordinates.map(co => new Coordinate(co.j, -co.i)),this.label)
        rotatedTile.normalize()
        return rotatedTile
    }

    mirroredTile(): Tile {
        const mirroredTile = new Tile(this.coordinates.map(co => new Coordinate(co.i, -co.j)), this.label)
        mirroredTile.normalize()
        return mirroredTile
    }

    // TODO: not all tiles have 8 diffirent configurations 
    //   - so prevent duplicates in return array!
    //   - using dictonary to prevent that configurations for the same tile are calculated multiple times
    getTileConfigurations(): Tile[] {
        let tiles:Tile[] = [this]
        let tile:Tile = this.rotatedTile()
        for (let i:number = 0; i < 3; i++) {
            tiles.push(tile)
            tile = tile.rotatedTile()            
        }
        tile = this.mirroredTile()
        for (let i:number = 0; i < 4; i++) {
            tiles.push(tile)
            tile = tile.rotatedTile()            
        }        
        return tiles
    }

    print() {
        console.log(this.coordinates)
    }
}