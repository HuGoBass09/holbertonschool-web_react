/* eslint-disable */
// Create a function named getFullYear that will return the current year

// Function that will return the current year
export function getFullYear() {
    return new Date().getFullYear();
}
// Function that change footer
export function getFooterCopy(isIndex) {
    if (isIndex) {
        return "Holberton School";
    }
    else {
        return "Holberton School main dashboard"
        }
}
 //function to get latest notifications
export function getLatestNotification() {
    return "<strong>Urgent requirement</strong> - complete by EOD";
}