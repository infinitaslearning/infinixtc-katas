import { toFiveMinutesRow, toSingleMinutesRow } from './berlin-clock';

describe('ToBerlinTime tests', () => {
  describe('single minute row', () => {
    it('toSingleMinutesRow returns OOOO when time is 00:00:00', () => {
      expect((toSingleMinutesRow('00:00:00'))).toEqual('OOOO');
    });

    it('toSingleMinutesRow returns YYYY when time is 23:59:59', () => {
      expect((toSingleMinutesRow('23:59:59'))).toEqual('YYYY');
    });

    it('toSingleMinutesRow returns YYOO when time is 12:32:00', () => {
      expect((toSingleMinutesRow('12:32:00'))).toEqual('YYOO');
    });
  })

  describe('five minutes row', () => {
    it('returns OOOOOOOOOOO when time is 00:00:00', () => {
      const time = '00:00:00';

      const row = toFiveMinutesRow(time);

      expect(row).toEqual('OOOOOOOOOOO');
    })

    it('returns YYRYYRYYRYY when time is 23:59:59', () => {
      const time = '23:59:59';

      const row = toFiveMinutesRow(time);

      expect(row).toEqual('YYRYYRYYRYY');
    })

    it('returns YYRYYRYOOOO when time is 12:35:00', () => {
      const time = '12:35:00';

      const row = toFiveMinutesRow(time);

      expect(row).toEqual('YYRYYRYOOOO');
    })
  })
});
