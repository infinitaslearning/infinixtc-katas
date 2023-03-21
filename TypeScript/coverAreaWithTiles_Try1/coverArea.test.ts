import  { Tile } from './tile'
import { Area } from './area'
import { Coordinate, LabeledCoordinate } from './coordinate';

describe('cover Area with tiles tests', () => {
   
    it('isFullyCovered() should return false when an area isnt fully covered', () => { 
        // __
        const area = new Area(
            [new LabeledCoordinate(0,0), new LabeledCoordinate(0,1)]
        ) 
        expect(area.isFullyCovered()).toBeFalsy()
    })

    it('isFullyCovered() should return true when an area was already fully covered', () => {        
        // AA
        const coveredArea = new Area(
            [new LabeledCoordinate(0, 0, 'A'), new LabeledCoordinate(0, 1, 'A')]
        )           
        expect(coveredArea.isFullyCovered()).toBeTruthy()
    })

    it('given a tile with the same shape and size as an area, then this tile should cover the area', () => {
        //  _
        // __
        const area = new Area(
            [new LabeledCoordinate(0,1), 
                new LabeledCoordinate(1,0), new LabeledCoordinate(1,1)]
        )

        //  A
        // AA
        const tile = new Tile(
            [new Coordinate(0,1), 
                new Coordinate(1,0), new Coordinate(1,1)],
            'A'
        )        

        area.coverAreaWithTiles([tile])
        expect(area.isFullyCovered()).toBeTruthy()
    })

    it('given a tile with a bigger size then an area, then this tile doesnt fit and cant be used to cover the area', () => {
        // _
        const area = new Area(
            [new LabeledCoordinate(0,0)]
        )

        // AAA
        const tile = new Tile(
            [new Coordinate(0,0), new Coordinate(0,1), new Coordinate(0,2)],
            'A'
        )  

        const tile2 = new Tile(
            [new Coordinate(10,0), new Coordinate(10,-1), new Coordinate(10,-2)],
            'A'
        )  
       
        area.coverAreaWithTiles([tile])
        expect(area.isFullyCovered()).toBeFalsy()        
    }) 
    
    it('given a tile with the same size but another shape as an area, then this tile shouldnt cover the area', () => {
        // ___
        const area = new Area(
            [new LabeledCoordinate(0,0), new LabeledCoordinate(0,1), new LabeledCoordinate(0,2)]
        )

        // AA
        // A
        const tile = new Tile(
            [new Coordinate(0,0), new Coordinate(0,1), 
                new Coordinate(1,1)],
            'A'
        )  

        area.coverAreaWithTiles([tile])
        expect(area.isFullyCovered()).toBeFalsy()
    })

    it('given a tile with the same size and shape as an area, then this tile should cover the area, regardless of whether the tile needs to be horizontal shifted ', () => {
        //     __
        //     _
        const area = new Area(
            [new LabeledCoordinate(0,10), new LabeledCoordinate(0,11), new LabeledCoordinate(1,10)]
        )

        // AA
        // A
        const tile = new Tile(
            [new Coordinate(0,0), new Coordinate(0,1), 
                new Coordinate(1,0)],
            'A'
        )  

        area.coverAreaWithTiles([tile])
        expect(area.isFullyCovered()).toBeTruthy()
    }) 

    it('given a tile with the same size and shape as an area, then this tile should cover the area, regardless of whether the tile needs to be vertical shifted ', () => {
        //
        //
        // __
        // _
        const area = new Area(
            [new LabeledCoordinate(2,0), new LabeledCoordinate(2,1), new LabeledCoordinate(3,0)]
        )

        // AA
        // A
        const tile = new Tile(
            [new Coordinate(0,0), new Coordinate(0,1), 
                new Coordinate(1,0)],
            'A'
        )  

        area.coverAreaWithTiles([tile])
        expect(area.isFullyCovered()).toBeTruthy()
    })     

    it('given a tile with the same size and shape as an area, then this tile should cover the area, regardless of whether the tile needs to be rotated 90° ', () => {
        // _
        // _
        // _
        const area = new Area(
            [new LabeledCoordinate(0,0),
                new LabeledCoordinate(1,0),
                new LabeledCoordinate(2,0)]
        )

        // AAA
        const tile = new Tile(
            [new Coordinate(0,0), new Coordinate(0,1), new Coordinate(0,2)],        
            'A'
        )  

        area.coverAreaWithTiles([tile])
        expect(area.isFullyCovered()).toBeTruthy()
    })      

    it('given a tile with the same size and shape as an area, then this tile should cover the area, regardless of whether the tile needs more then one rotations ', () => {
        // _
        // ___
        const area = new Area(
            [new LabeledCoordinate(0,0),
                new LabeledCoordinate(1,0), new LabeledCoordinate(1,1), new LabeledCoordinate(1,2)]
        )

        // AA
        // A
        // A
        const tile = new Tile(
            [new Coordinate(0,0), new Coordinate(0,1), 
                new Coordinate(1,0),        
                new Coordinate(2,0)],
            'A'
        )  

        area.coverAreaWithTiles([tile])
        expect(area.isFullyCovered()).toBeTruthy()
    })  

    it('given a tile with the same size and shape as an area, then this tile should cover the area, regardless of whether the tile needs to be mirrored', () => {
        // __
        //  _
        //  _
        const area = new Area(
            [new LabeledCoordinate(0,0), new LabeledCoordinate(0,1),
                new LabeledCoordinate(1,1),
                new LabeledCoordinate(2,1)]
        )

        // AA
        // A
        // A
        const tile = new Tile(
            [new Coordinate(0,0), new Coordinate(0,1), 
                new Coordinate(1,0),        
                new Coordinate(2,0)],
            'A'
        )  

        area.coverAreaWithTiles([tile])
        expect(area.isFullyCovered()).toBeTruthy()
    })  

    it('given a tile with the same size and shape as an area, then this tile should cover the area, regardless of whether the tile needs to be mirrored and also rotated', () => {
        // __
        //  _
        //  _
        const area = new Area(
            [new LabeledCoordinate(0,0), new LabeledCoordinate(0,1),
                new LabeledCoordinate(1,1),
                new LabeledCoordinate(2,1)]
        )

        // AAA
        //   A
        const tile = new Tile(
            [new Coordinate(0,0), new Coordinate(0,1), new Coordinate(0,2), 
                new Coordinate(1,2)],
            'A'
        )  

        area.coverAreaWithTiles([tile])
        expect(area.isFullyCovered()).toBeTruthy()
    })  

    it('given two tiles that fit immediately together in an area, then these tiles should cover the area', () => {
        // __
        // __
        // __
        const area = new Area(
            [new LabeledCoordinate(0,0), new LabeledCoordinate(0,1),
                new LabeledCoordinate(1,0), new LabeledCoordinate(1,1),
                new LabeledCoordinate(2,0), new LabeledCoordinate(2,1)]
        )

        // A
        // A
        // A
        const tile1 = new Tile(
            [new Coordinate(0,0), 
                new Coordinate(1,0), 
                new Coordinate(2,0)],
            'A'
        )  

        // B
        // B
        // B
        const tile2 = new Tile(
            [new Coordinate(0,0), 
                new Coordinate(1,0), 
                new Coordinate(2,0)],
            'B'
        )        
        area.coverAreaWithTiles([tile1, tile2])
        expect(area.isFullyCovered()).toBeTruthy()
    })     

    it('given two tiles where a tile needs a transformation to make the tiles fitin the area, then these tiles should cover the area', () => {
        // __
        // ___
        // __
        const area = new Area(
            [new LabeledCoordinate(0,0), new LabeledCoordinate(0,1),
                new LabeledCoordinate(1,0), new LabeledCoordinate(1,1), new LabeledCoordinate(1,2),
                new LabeledCoordinate(2,0), new LabeledCoordinate(2,1)]
        )

        // AA
        //  A
        // AA
        const tile1 = new Tile(
            [new Coordinate(0,0), new Coordinate(0,1), 
                new Coordinate(1,1), 
                new Coordinate(2,0), new Coordinate(2,1)],
            'A'
        )  

        // BB
        const tile2 = new Tile(
            [new Coordinate(0,0), new Coordinate(0,1)],
            'B'
        )    
        
        // Tile A should be mirrored to cover the area
        area.coverAreaWithTiles([tile1, tile2])
        expect(area.isFullyCovered()).toBeTruthy()
    })   

    it('given two tiles that together can cover an area, then the solution should be found independent from the order the tiles are provided', () => {
        // ____
        // ___
        const area1 = new Area(
            [new LabeledCoordinate(0,0), new LabeledCoordinate(0,1), new LabeledCoordinate(0,2), new LabeledCoordinate(0,3), 
                new LabeledCoordinate(1,0), new LabeledCoordinate(1,1), new LabeledCoordinate(1,2)]
        )
        const area2 = new Area(
            [new LabeledCoordinate(0,0), new LabeledCoordinate(0,1), new LabeledCoordinate(0,2), new LabeledCoordinate(0,3),
                new LabeledCoordinate(1,0), new LabeledCoordinate(1,1), new LabeledCoordinate(1,2)]
        )        

        // AA
        //  AA
        const tile1 = new Tile(
            [new Coordinate(0,0), new Coordinate(0,1), 
                new Coordinate(1,0), new Coordinate(1,1)],
            'A'
        )  

        // BB
        // B
        const tile2 = new Tile(
            [new Coordinate(0,0),  new Coordinate(0,1),
                new Coordinate(1,0)],
            'B'
        )    
   
        area1.coverAreaWithTiles([tile1, tile2])
        expect(area1.isFullyCovered()).toBeTruthy()
        area2.coverAreaWithTiles([tile2, tile1])
        expect(area2.isFullyCovered()).toBeTruthy()
    })  

    it('coverArea should work for the calender puzzle', () => {
        // AREA = Tuesday 21 March (hooray spring is there)
        const area = new Area(
            [new LabeledCoordinate(0,0), new LabeledCoordinate(0,1), new LabeledCoordinate(0,3), new LabeledCoordinate(0,4), new LabeledCoordinate(0,5),
                new LabeledCoordinate(1,0), new LabeledCoordinate(1,1), new LabeledCoordinate(1,2), new LabeledCoordinate(1,3), new LabeledCoordinate(1,4), new LabeledCoordinate(1,5),
                new LabeledCoordinate(2,0), new LabeledCoordinate(2,1), new LabeledCoordinate(2,2), new LabeledCoordinate(2,3), new LabeledCoordinate(2,4), new LabeledCoordinate(2,5), new LabeledCoordinate(2,6),
                new LabeledCoordinate(3,0), new LabeledCoordinate(3,1), new LabeledCoordinate(3,2), new LabeledCoordinate(3,3), new LabeledCoordinate(3,4), new LabeledCoordinate(3,5), new LabeledCoordinate(3,6),
                new LabeledCoordinate(4,0), new LabeledCoordinate(4,1), new LabeledCoordinate(4,2), new LabeledCoordinate(4,3), new LabeledCoordinate(4,4), new LabeledCoordinate(4,5),
                new LabeledCoordinate(5,0), new LabeledCoordinate(5,1), new LabeledCoordinate(5,2), new LabeledCoordinate(5,3), new LabeledCoordinate(5,4), new LabeledCoordinate(5,5), new LabeledCoordinate(5,6),
                new LabeledCoordinate(6,0), new LabeledCoordinate(6,1), new LabeledCoordinate(6,2), new LabeledCoordinate(6,3), new LabeledCoordinate(6,4), new LabeledCoordinate(6,6),
                new LabeledCoordinate(7,4), new LabeledCoordinate(7,5), new LabeledCoordinate(7,6),])

        // A
        // AAA
        const tileA = new Tile(
            [new Coordinate(0,0), 
                new Coordinate(1,0), new Coordinate(1,1), new Coordinate(1,2)],
            'A'
        )  

        // B
        // B
        // BBB
        const tileB = new Tile(
            [new Coordinate(0,0), 
                new Coordinate(1,0), 
                new Coordinate(2,0), new Coordinate(2,1), new Coordinate(2,2)],
            'B'
        )  
        
        //  CC
        // CC
        const tileC = new Tile(
            [new Coordinate(0,1), new Coordinate(0,2),
                new Coordinate(1,0), new Coordinate(1,1) ],
            'C'
        )  

        // DDD
        //  D
        //  D
        const tileD = new Tile(
            [new Coordinate(0,0), new Coordinate(0,1), new Coordinate(0,2),
                new Coordinate(1,1), 
                new Coordinate(2,1)],
            'D'
        )   
        
        // EE
        //  E
        //  EE
        const tileE = new Tile(
            [new Coordinate(0,0), new Coordinate(0,1),
                new Coordinate(1,1), 
                new Coordinate(2,1), new Coordinate(2,2) ],
            'E'
        )           

        // FFFF        
        const tileF = new Tile(
            [new Coordinate(0,0), new Coordinate(0,1), new Coordinate(0,2), new Coordinate(0,3)],
            'F'
        )   
        
        // GGG
        // G G    
        const tileG = new Tile(
            [new Coordinate(0,0), new Coordinate(0,1), new Coordinate(0,2), 
                new Coordinate(1,0), new Coordinate(1,2)],
            'G'
        )   

        // HHH
        // HH    
        const tileH = new Tile(
            [new Coordinate(0,0), new Coordinate(0,1), new Coordinate(0,2), 
                new Coordinate(1,0), new Coordinate(1,1)],
            'H'
        )     
        
        // I
        // IIII
        const tileI = new Tile(
            [new Coordinate(0,0), 
                new Coordinate(1,0), new Coordinate(1,1), new Coordinate(1,2), new Coordinate(1,3)],
            'I'
        )     
        
        // JJ
        //  JJJ
        const tileJ = new Tile(
            [new Coordinate(0,0), new Coordinate(0,1),
                new Coordinate(1,1), new Coordinate(1,2), new Coordinate(1,3) ],
            'J'
        )

        area.coverAreaWithTiles([tileA, tileB, tileC, tileD, tileE, tileF, tileG, tileH, tileI, tileJ])
        area.print()
        expect(area.isFullyCovered()).toBeTruthy()        
    })
});


