import { toBerlinTime } from './berlin-clock';

describe('ToBerlinTime tests', () => {
  describe('single minute row', () => {
    it('toBerlinTime returns OOOO when time is 00:00:00', () => {
      expect((toBerlinTime('00:00:00'))).toEqual('OOOO');
    });

    it('toBerlinTime returns YYYY when time is 23:59:59', () => {
      expect((toBerlinTime('23:59:59'))).toEqual('YYYY');
    });

    it('toBerlinTime returns YYOO when time is 12:32:00', () => {
      expect((toBerlinTime('12:32:00'))).toEqual('YYOO');
    });    
  })
});
