import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils functions', () => {
    
    test('getFullYear returns the correct year', () => {
      const year = new Date().getFullYear();
      expect(getFullYear()).toBe(year);
    });
  
    describe('getFooterCopy', () => {
      test('returns correct string when the argument is true', () => {
        expect(getFooterCopy(true)).toBe("Holberton School");
      });
  
      test('returns correct string when the argument is false', () => {
        expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
      });
    });
  
    test('getLatestNotification returns the correct HTML string', () => {
      expect(getLatestNotification()).toBe(`<strong>Urgent requirement</strong> - complete by EOD`);
    });
  });
