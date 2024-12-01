/* eslint-disable */
// Import the necessary functions from your utils file
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils tests', () => {
    test('getFullYear returns the correct year', () => {
        const year = getFullYear();
        expect(year).toBe(new Date().getFullYear());
    });

    test('getFooterCopy returns the correct string', () => {
        expect(getFooterCopy(true)).toBe('Dashboard');
        expect(getFooterCopy(false)).toBe('Dashboard - All rights reserved');
    });

    test('getLatestNotification returns the correct string', () => {
        const notification = getLatestNotification();
        expect(notification).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
});