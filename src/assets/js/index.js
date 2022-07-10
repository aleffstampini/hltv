
const returnAllPlayers = async () => {
    const response = await fetch('player');
    const data = await response.json();

    const div = document.querySelector('.test');

    data.forEach(player => {
        div.innerHTML += `${player.name}<br>`;
    });
};

returnAllPlayers();