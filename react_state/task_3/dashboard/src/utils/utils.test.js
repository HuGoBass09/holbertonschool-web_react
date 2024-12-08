const { getFullYear, getFooterCopy, getLatestNotification } = require('./utils');
const assert = require('assert');

describe('getFullYear()', function () {
	it('should return the correct year', function() {
		const current_year = new Date().getFullYear();
		assert.equal(getFullYear(), current_year);
	});
});

describe('getFooterCopy()', function () {
	it('should return the correct string when true', function() {
		assert.equal(getFooterCopy(true), 'Holberton School');
	});

	it('should return the correct string when false', function() {
		assert.equal(getFooterCopy(false), 'Holberton School main dashboard');
	});
});

describe('getLatestNotification()', function () {
	it('should return the correct string', function() {
		assert.equal(getLatestNotification(), "<strong>Urgent requirement</strong> - complete by EOD");
	});
});
