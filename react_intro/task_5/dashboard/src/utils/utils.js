export function getFullYear() {
    return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
    if (isIndex) {
        return "Holberton School";
    }
    return "Holberton School main dashboard";
}

export function getLatestNotification(){
    return `<strong>Urgent requirement</strong> - complete by EOD`;
}
