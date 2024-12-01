export function getFullYear() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear;
  }
  
  export function getFooterCopy(isIndex) {
    if (isIndex) {
      return 'Holberton School';
    } else {
      return 'Holberton School main dashboard';
    }
  }
  
  export function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD';
  }
  
  export function closeButton() {
    console.log('Close button has been clicked');
  }