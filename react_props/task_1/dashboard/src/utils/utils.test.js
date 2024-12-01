import { getFullYear, getFooterCopy, getLatestNotification } from './utils.js';

describe('getFullYear function', () => {
  it('returns the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  })
});

describe('getFooterCopy function', () => {
  it('returns "Holberton School" when it receives true as an argument', () => {
    const footerCopyIsTrue = 'Holberton School';
    expect(getFooterCopy(true)).toBe(footerCopyIsTrue);
  })
});

describe('getFooterCopy function', () => {
  it('returns "Holberton School main dashboard" when it receives false as an argument', () => {
    const footerCopyIsFalse = 'Holberton School main dashboard';
    expect(getFooterCopy(false)).toBe(footerCopyIsFalse);
  })
});

describe('getLatestNotification function', () => {
  it('returns the latest notification', () => {
    const latestNotification = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(latestNotification);
  })
});