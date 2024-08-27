function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString('cz-CZ', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        
    });
    document.getElementById('current-datetime').textContent = dateTimeString;
}

updateDateTime();
setInterval(updateDateTime, 1000);