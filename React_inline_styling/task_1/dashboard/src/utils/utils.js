export function getFullYear() {
    let date = new Date()
    return date.getFullYear()
}

export function getFooterCopy(isIndex) {
    if (!isIndex) {
        return 'Holberton School main dashboard'
    }
    return 'Holberton School'
}

export function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD'
}
