import { Coordinate, LabeledCoordinate } from './coordinate'
import { Tile } from './tile'

export class Area {
    coordinates: LabeledCoordinate[]

    constructor(coordinates: LabeledCoordinate[]) {
        this.coordinates = coordinates
    }

    tilesNotCovered(): LabeledCoordinate[] {
        return this.coordinates.filter(co => co.label === '')
    }

    isFullyCovered(): boolean {
        return this.tilesNotCovered().length === 0
    }

    coverAreaWithTiles(tiles: Tile[]) {
        this.solve(tiles)  
    }

    solve(tiles: Tile[]): boolean {
        if (this.isFullyCovered()) return true
        else {
            if (tiles.length > 0) {           
                for(const tile of tiles) {    
                    const otherTiles:Tile[] = tiles.slice()
                    otherTiles.splice(tiles.indexOf(tile), 1)                                     
                    if (this.tryTile(tile, otherTiles)) return true
                }
            }
            return false
        }
    }

    tryTile(tile:Tile, remainingTiles:Tile[]): boolean {
        const tileConfigurations:Tile[] = tile.getTileConfigurations()
        for(const tileInConfiguration of tileConfigurations) {
            const shiftedTile = tileInConfiguration.shiftedTileToCoordinate(this.getLeftUpper())   
            if (this.doesTileFitInLeftUpperCorner(shiftedTile)) {
                this.placeTileInLeftUpperCorner(shiftedTile)
                // recursive call
                if (this.solve(remainingTiles)) return true
                this.removeTile(shiftedTile)
            }
        }
        return false
    }

    doesTileFitInLeftUpperCorner(tile:Tile):boolean {        
        return tile.coordinates.every(tileCo => this.tilesNotCovered().some(areaCo => tileCo.equals(areaCo)))
    }

    placeTileInLeftUpperCorner(tile: Tile) {
        this.tilesNotCovered().filter(areaCo => tile.coordinates.some(tileCo => tileCo.equals(areaCo))).forEach(co => {co.label = tile.label});
    }

    removeTile(tile: Tile) {
        this.coordinates.forEach(co => {if (co.label === tile.label) co.label = ''})
    }


    getLeftUpper(): Coordinate {
        return this.tilesNotCovered().reduce((a,b) => {
            if (a.isLess(b)) return a
            else return b
        })
    }

    print() {
        const maxI = this.coordinates.map(co => co.i).reduce((a,b) => Math.max(a,b))
        const maxJ = this.coordinates.map(co => co.j).reduce((a,b) => Math.max(a,b))

        let output:string = ''
        for(let i=0; i <= maxI; i++)
        {
            let rule:string = ''
            for(let j=0; j <= maxJ; j++)
            {
                const find:LabeledCoordinate[] = this.coordinates.filter(co => co.equals(new Coordinate(i,j))) 
                if (find.length > 0) rule = rule + find[0].label
                else rule = rule + ' '
            }
            output = output + rule + '\n'
        }
        console.log(output)
    }

}
