function createGame(player1, player2, gameTime) {
	let game = `
         <li>
            <img src="./assets/img/flags/${player1}.svg" alt="${player1}" />
            <strong>${gameTime}</strong>
            <img src="./assets/img/flags/${player2}.svg" alt="${player2}" />
		 </li>
    `;

	return game;
}

let delayAnimation = 0;

function createCard(date, weekDay, game) {
	delayAnimation = delayAnimation + 0.25;

	let card = `
    	<div class="card" style='animation-delay: ${delayAnimation}s'>
			<h2>${date} <span>${weekDay}</span></h2>

			<ul class="matches">
                ${game}
			</ul>
        </div>
`;

	return card;
}

document.querySelector(".cards").innerHTML =
	createCard(
		"24/11",
		"quinta",
		createGame("switzerland", "camaroon", "07:00") +
			createGame("brazil", "serbia", "08:00") +
			createGame("portugal", "ghana", "13:00")
	) +
	createCard(
		"28/11",
		"segunda",
		createGame("southKorea", "ghana", "10:00") +
			createGame("brazil", "switzerland", "13:00") +
			createGame("portugal", "uruguay", "16:00")
	) +
	createCard(
		"02/01",
		"quarta",
		createGame("portugal", "southKorea", "12:00") +
			createGame("brazil", "camaroon", "16:00") +
			createGame("serbia", "switzerland", "16:00")
	);
