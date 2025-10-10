async function floodGame(pin, name, num) {  
    const status = document.getElementById('status');  
    let joined = 0;  
    for (let i = 0; i < num; i++) {  
        await new Promise(resolve => setTimeout(resolve, 100)); // Tiny delay to not get blocked  
        const botName = name + (i + 1); // Unique name per bot  
        fetch('https://api.blooket.com/api/firebase/join', {  
            method: 'POST',  
            headers: {  
                'Accept': 'application/json, text/plain, */*',  
                'Content-Type': 'application/json;charset=UTF-8',  
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' // Fake browser  
            },  
            body: JSON.stringify({ id: pin, name: botName })  
        })  
        .then(response => {  
            if (response.ok) joined++;  
            status.innerHTML = `Bot ${i+1}/${num} dispatched... (${joined} successful)`;  
        })  
        .catch(err => {  
            console.error('Join failed:', err);  
            status.innerHTML += `<br><span style="color: orange;">Bot ${i+1} flopped: ${err.message}</span>`;  
        });  
    }  
    status.innerHTML += '<br><span style="color: green;">Flood done! Check the game.</span>';  
}  