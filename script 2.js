function startFlood() {  
    const pin = document.getElementById('gamePin').value.trim();  
    const name = document.getElementById('botName').value.trim();  
    const num = parseInt(document.getElementById('numBots').value);  
    const status = document.getElementById('status');  
  
    if (pin.length !== 6 || !/^\d+$/.test(pin)) {  
        status.innerHTML = '<span style="color: red;">Error: PIN must be 6 digits!</span>';  
        return;  
    }  
    if (!name || num < 1 || num > 100) {  
        status.innerHTML = '<span style="color: red;">Error: Valid name and 1-100 bots required!</span>';  
        return;  
    }  
    status.innerHTML = 'Flood starting... Hold tight.';  
    // Kick off the flood loop next  
    floodGame(pin, name, num);  
}  