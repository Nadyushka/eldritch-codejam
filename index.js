/* разбивка карт по сложностям */

const greenCard = [[5, 8, 5], ['easyGreen1', 'easyGreen2', 'easyGreen3', 'easyGreen4', 'easyGreen5', 'middleGreen1', 'middleGreen2', 'middleGreen3', 'middleGreen4', 'middleGreen5', 'middleGreen6', 'middleGreen7', 'middleGreen8', 'hardGreen1', 'hardGreen2', 'hardGreen3', 'hardGreen4', 'hardGreen5']]
const brownCard = [[5, 11, 5], ['easyBrown1', 'easyBrown2', 'easyBrown3', 'easyBrown4', 'easyBrown5', 'middleBrown1', 'middleBrown2', 'middleBrown3', 'middleBrown4', 'middleBrown5', 'middleBrown6', 'middleBrown7', 'middleBrown8', 'middleBrown9', 'middleBrown10', 'middleBrown11', 'hardBrown1', 'hardBrown2', 'hardBrown3', 'hardBrown4', 'hardBrown5']]
const blueCard = [[4, 4, 4], ['easyBlue1', 'easyBlue2', 'easyBlue3', 'easyBlue4', 'middleBlue1', 'middleBlue2', 'middleBlue3', 'middleBlue4', 'hardBlue1', 'hardBlue2', 'hardBlue3', 'hardBlue4']]

/* задание параметров старейших */

const Azathoth = [
	{ total: 14 },
	{ stage1: [1, 2, 1] },
	{ stage2: [2, 3, 1] },
	{ stage3: [2, 4, 0] },
	[5, 9, 2]
]

const Cthulthu = [
	{ total: 14 },
	{ stage1: [0, 2, 2] },
	{ stage2: [1, 3, 0] },
	{ stage3: [3, 4, 0] },
	[4, 9, 2]
]

const IogSothoth = [
	{ total: 14 },
	{ stage1: [0, 2, 1] },
	{ stage2: [2, 3, 1] },
	{ stage3: [3, 4, 0] },
	[5, 9, 2]
]

const ShubNiggurath = [
	{ total: 16 },
	{ stage1: [1, 2, 1] },
	{ stage2: [3, 2, 1] },
	{ stage3: [2, 4, 0] },
	[6, 8, 2]
]


/* создаю переменную для контроля выбора старейшего при нажатии на него */

let chooseAncient;

const oldAzathoth = document.querySelector('.Azathoth');
const oldCthulthu = document.querySelector('.Cthulthu');
const oldIogSothoth = document.querySelector('.IogSothoth');
const oldShubNiggurath = document.querySelector('.ShubNiggurath');


oldAzathoth.addEventListener('click', function () {
	oldAzathoth.style.border = "3px solid red";
	oldCthulthu.style.border = "none";
	oldIogSothoth.style.border = "none";
	oldShubNiggurath.style.border = "none";
	chooseAncient = 'Azathoth';
})

oldCthulthu.addEventListener('click', function () {
	oldCthulthu.style.border = "3px solid red";
	oldAzathoth.style.border = "none";
	oldIogSothoth.style.border = "none";
	oldShubNiggurath.style.border = "none";
	chooseAncient = 'Cthulthu';
})

oldIogSothoth.addEventListener('click', function () {
	oldIogSothoth.style.border = "3px solid red";
	oldCthulthu.style.border = "none";
	oldAzathoth.style.border = "none";
	oldShubNiggurath.style.border = "none";
	chooseAncient = 'IogSothoth';
})

oldShubNiggurath.addEventListener('click', function () {
	oldShubNiggurath.style.border = "3px solid red";
	oldCthulthu.style.border = "none";
	oldIogSothoth.style.border = "none";
	oldAzathoth.style.border = "none";
	chooseAncient = 'ShubNiggurath';
})


/* создаю переменную для контроля уровня сложности */

let chooseLevel;

const superEasy = document.querySelector('.super-easy');
const easy = document.querySelector('.easy');
const middle = document.querySelector('.middle');
const difficult = document.querySelector('.difficult');
const superDifficult = document.querySelector('.super-difficult');

superEasy.addEventListener('click', function () {
	superEasy.style.border = "2px solid red";
	easy.style.border = "none";
	middle.style.border = "none";
	difficult.style.border = "none";
	superDifficult.style.border = "none";
	chooseLevel = 'superEasy';
	deckShuffle.style.border = "1px solid white";
})

easy.addEventListener('click', function () {
	easy.style.border = "2px solid red";
	superEasy.style.border = "none";
	middle.style.border = "none";
	difficult.style.border = "none";
	superDifficult.style.border = "none";
	chooseLevel = 'easy';
	deckShuffle.style.border = "1px solid white";
})

middle.addEventListener('click', function () {
	middle.style.border = "2px solid red";
	superEasy.style.border = "none";
	easy.style.border = "none";
	difficult.style.border = "none";
	superDifficult.style.border = "none";
	chooseLevel = 'middle';
	deckShuffle.style.border = "1px solid white";
})

difficult.addEventListener('click', function () {
	difficult.style.border = "2px solid red";
	superEasy.style.border = "none";
	easy.style.border = "none";
	middle.style.border = "none";
	superDifficult.style.border = "none";
	chooseLevel = 'difficult';
	deckShuffle.style.border = "1px solid white";
})

superDifficult.addEventListener('click', function () {
	superDifficult.style.border = "2px solid red";
	superEasy.style.border = "none";
	easy.style.border = "none";
	middle.style.border = "none";
	difficult.style.border = "none";
	chooseLevel = 'superDifficult';
	deckShuffle.style.border = "1px solid white";
})


/* выделении кнопки Замешать колоду при нажатии */


const deckShuffle = document.querySelector('.deck-shuffle');

deckShuffle.addEventListener('click', function () {
	deckShuffle.style.border = "2px solid red";
})

/* нахождение счетчиков оставшихся карт */

const stage1green = document.querySelector('.stage1 .green')
const stage1brown = document.querySelector('.stage1 .brown')
const stage1blue = document.querySelector('.stage1 .blue')


const stage2green = document.querySelector('.stage2 .green')
const stage2brown = document.querySelector('.stage2 .brown')
const stage2blue = document.querySelector('.stage2 .blue')

const stage3green = document.querySelector('.stage3 .green')
const stage3brown = document.querySelector('.stage3 .brown')
const stage3blue = document.querySelector('.stage3 .blue')

/* задать замес карт при нажатия на кнопку */

let cardsArray = [[], [], []];
let stage1array = [];
let stage2array = [];
let stage3array = [];

const deckShuffleNew = document.querySelector('.deck-shuffle-new')


deckShuffle.addEventListener('click', function () {
	deckShuffleNew.style.display = 'block';
	deckShuffle.style.display = 'none';

	if (chooseAncient === 'Azathoth' && chooseLevel === 'middle') {
		for (let i = 1; cardsArray[0].length <= Azathoth[4][0] - 1; i++) {
			let values = Math.floor(Math.random() * 18);
			if (!cardsArray[0].includes(values)) {
				cardsArray[0].push(values)
			} else {
				while (cardsArray[0].length <= Azathoth[4][0] - 1) {
					values = Math.floor(Math.random() * 18);
					if (!cardsArray[0].includes(values)) {
						cardsArray[0].push(values)
					}
				}
			}
		}

		for (let i = 1; cardsArray[1].length <= Azathoth[4][1] - 1; i++) {
			let values = Math.floor(Math.random() * 21);
			if (!cardsArray[1].includes(values)) {
				cardsArray[1].push(values)
			} else {
				while (cardsArray[1].length <= Azathoth[4][1] - 1) {
					values = Math.floor(Math.random() * 21);
					if (!cardsArray[1].includes(values)) {
						cardsArray[1].push(values)
					}
				}
			}
		}


		for (let i = 1; cardsArray[2].length <= Azathoth[4][2] - 1; i++) {
			let values = Math.floor(Math.random() * 12);
			if (!cardsArray[2].includes(values)) {
				cardsArray[2].push(values)
			} else {
				while (cardsArray[2].length <= Azathoth[4][2] - 1) {
					values = Math.floor(Math.random() * 12);
					if (!cardsArray[2].includes(values)) {
						cardsArray[2].push(values)
					}
				}
			}

		}

		console.log(cardsArray)

		stage1array.push(cardsArray[0].slice(0, 1))
		stage1array.push(cardsArray[1].slice(0, 2))
		stage1array.push(cardsArray[2].slice(0, 1))
		stage2array.push(cardsArray[0].slice(1, 3))
		stage2array.push(cardsArray[1].slice(2, 5))
		stage2array.push(cardsArray[2].slice(1, 2))
		stage3array.push(cardsArray[0].slice(3, 5))
		stage3array.push(cardsArray[1].slice(5, 9))
		stage3array.push(0)




		stage1green.textContent = stage1array[0].length;
		stage1brown.textContent = stage1array[1].length;
		stage1blue.textContent = stage1array[2].length;
		stage2green.textContent = stage2array[0].length;
		stage2brown.textContent = stage2array[1].length;
		stage2blue.textContent = stage2array[2].length;
		stage3green.textContent = stage3array[0].length;
		stage3brown.textContent = stage3array[1].length;
		stage3blue.textContent = stage3array[2].length;


	} else if (chooseAncient === 'Cthulthu' && chooseLevel === 'middle') {
		for (let i = 1; cardsArray[0].length <= Cthulthu[4][0] - 1; i++) {
			let values = Math.floor(Math.random() * 18);
			if (!cardsArray[0].includes(values)) {
				cardsArray[0].push(values)
			} else {
				while (cardsArray[0].length <= Cthulthu[4][0] - 1) {
					values = Math.floor(Math.random() * 18);
					if (!cardsArray[0].includes(values)) {
						cardsArray[0].push(values)
					}
				}
			}
		}

		for (let i = 1; cardsArray[1].length <= Cthulthu[4][1] - 1; i++) {
			let values = Math.floor(Math.random() * 21);
			if (!cardsArray[1].includes(values)) {
				cardsArray[1].push(values)
			} else {
				while (cardsArray[1].length <= Cthulthu[4][1] - 1) {
					values = Math.floor(Math.random() * 21);
					if (!cardsArray[1].includes(values)) {
						cardsArray[1].push(values)
					}
				}
			}
		}


		for (let i = 1; cardsArray[2].length <= Cthulthu[4][2] - 1; i++) {
			let values = Math.floor(Math.random() * 12);
			if (!cardsArray[2].includes(values)) {
				cardsArray[2].push(values)
			} else {
				while (cardsArray[2].length <= Cthulthu[4][2] - 1) {
					values = Math.floor(Math.random() * 12);
					if (!cardsArray[2].includes(values)) {
						cardsArray[2].push(values)
					}
				}
			}

		}

		console.log(cardsArray)

		stage1array.push(0)
		stage1array.push(cardsArray[1].slice(0, 2))
		stage1array.push(cardsArray[2].slice(0, 2))
		stage2array.push(cardsArray[0].slice(0, 1))
		stage2array.push(cardsArray[1].slice(2, 5))
		stage2array.push(0)
		stage3array.push(cardsArray[0].slice(1, 4))
		stage3array.push(cardsArray[1].slice(5, 9))
		stage3array.push(0)



		stage1green.textContent = stage1array[0].length;
		stage1brown.textContent = stage1array[1].length;
		stage1blue.textContent = stage1array[2].length;
		stage2green.textContent = stage2array[0].length;
		stage2brown.textContent = stage2array[1].length;
		stage2blue.textContent = stage2array[2].length;
		stage3green.textContent = stage3array[0].length;
		stage3brown.textContent = stage3array[1].length;
		stage3blue.textContent = stage3array[2].length;


	} else if (chooseAncient === 'IogSothoth' && chooseLevel === 'middle') {
		for (let i = 1; cardsArray[0].length <= IogSothoth[4][0] - 1; i++) {
			let values = Math.floor(Math.random() * 18);
			if (!cardsArray[0].includes(values)) {
				cardsArray[0].push(values)
			} else {
				while (cardsArray[0].length <= IogSothoth[4][0] - 1) {
					values = Math.floor(Math.random() * 18);
					if (!cardsArray[0].includes(values)) {
						cardsArray[0].push(values)
					}
				}
			}
		}

		for (let i = 1; cardsArray[1].length <= IogSothoth[4][1] - 1; i++) {
			let values = Math.floor(Math.random() * 21);
			if (!cardsArray[1].includes(values)) {
				cardsArray[1].push(values)
			} else {
				while (cardsArray[1].length <= IogSothoth[4][1] - 1) {
					values = Math.floor(Math.random() * 21);
					if (!cardsArray[1].includes(values)) {
						cardsArray[1].push(values)
					}
				}
			}
		}


		for (let i = 1; cardsArray[2].length <= IogSothoth[4][2] - 1; i++) {
			let values = Math.floor(Math.random() * 12);
			if (!cardsArray[2].includes(values)) {
				cardsArray[2].push(values)
			} else {
				while (cardsArray[2].length <= IogSothoth[4][2] - 1) {
					values = Math.floor(Math.random() * 12);
					if (!cardsArray[2].includes(values)) {
						cardsArray[2].push(values)
					}
				}
			}

		}

		console.log(cardsArray)

		stage1array.push(0)
		stage1array.push(cardsArray[1].slice(0, 2))
		stage1array.push(cardsArray[2].slice(0, 1))
		stage2array.push(cardsArray[0].slice(0, 2))
		stage2array.push(cardsArray[1].slice(2, 5))
		stage2array.push(cardsArray[2].slice(1, 2))
		stage3array.push(cardsArray[0].slice(2, 5))
		stage3array.push(cardsArray[1].slice(5, 9))
		stage3array.push(0)



		stage1green.textContent = stage1array[0].length;
		stage1brown.textContent = stage1array[1].length;
		stage1blue.textContent = stage1array[2].length;
		stage2green.textContent = stage2array[0].length;
		stage2brown.textContent = stage2array[1].length;
		stage2blue.textContent = stage2array[2].length;
		stage3green.textContent = stage3array[0].length;
		stage3brown.textContent = stage3array[1].length;
		stage3blue.textContent = stage3array[2].length;


	} else if (chooseAncient === 'ShubNiggurath' && chooseLevel === 'middle') {
		for (let i = 1; cardsArray[0].length <= ShubNiggurath[4][0] - 1; i++) {
			let values = Math.floor(Math.random() * 18);
			if (!cardsArray[0].includes(values)) {
				cardsArray[0].push(values)
			} else {
				while (cardsArray[0].length <= ShubNiggurath[4][0] - 1) {
					values = Math.floor(Math.random() * 18);
					if (!cardsArray[0].includes(values)) {
						cardsArray[0].push(values)
					}
				}
			}
		}

		for (let i = 1; cardsArray[1].length <= ShubNiggurath[4][1] - 1; i++) {
			let values = Math.floor(Math.random() * 21);
			if (!cardsArray[1].includes(values)) {
				cardsArray[1].push(values)
			} else {
				while (cardsArray[1].length <= ShubNiggurath[4][1] - 1) {
					values = Math.floor(Math.random() * 21);
					if (!cardsArray[1].includes(values)) {
						cardsArray[1].push(values)
					}
				}
			}
		}


		for (let i = 1; cardsArray[2].length <= ShubNiggurath[4][2] - 1; i++) {
			let values = Math.floor(Math.random() * 12);
			if (!cardsArray[2].includes(values)) {
				cardsArray[2].push(values)
			} else {
				while (cardsArray[2].length <= ShubNiggurath[4][2] - 1) {
					values = Math.floor(Math.random() * 12);
					if (!cardsArray[2].includes(values)) {
						cardsArray[2].push(values)
					}
				}
			}

		}

		console.log(cardsArray)

		stage1array.push(cardsArray[0].slice(0, 1))
		stage1array.push(cardsArray[1].slice(0, 2))
		stage1array.push(cardsArray[2].slice(0, 1))
		stage2array.push(cardsArray[0].slice(1, 4))
		stage2array.push(cardsArray[1].slice(2, 4))
		stage2array.push(cardsArray[2].slice(1, 2))
		stage3array.push(cardsArray[0].slice(4, 6))
		stage3array.push(cardsArray[1].slice(4, 8))
		stage3array.push(0)



		stage1green.textContent = stage1array[0].length;
		stage1brown.textContent = stage1array[1].length;
		stage1blue.textContent = stage1array[2].length;
		stage2green.textContent = stage2array[0].length;
		stage2brown.textContent = stage2array[1].length;
		stage2blue.textContent = stage2array[2].length;
		stage3green.textContent = stage3array[0].length;
		stage3brown.textContent = stage3array[1].length;
		stage3blue.textContent = stage3array[2].length;


	} else if (chooseAncient === 'Azathoth' && chooseLevel === 'superEasy') {
		for (let i = 1; cardsArray[0].length <= Azathoth[4][0] - 1; i++) {
			let values = Math.floor(Math.random() * 5);
			if (!cardsArray[0].includes(values)) {
				cardsArray[0].push(values)
			} else {
				while (cardsArray[0].length <= Azathoth[4][0] - 1) {
					values = Math.floor(Math.random() * 5);
					if (!cardsArray[0].includes(values)) {
						cardsArray[0].push(values)
					}
				}
			}
		}

		for (let i = 1; cardsArray[1].length <= Azathoth[4][1] - 1; i++) {
			let values = Math.floor(Math.random() * 9);
			if (!cardsArray[1].includes(values)) {
				cardsArray[1].push(values)
			} else {
				while (cardsArray[1].length <= Azathoth[4][1] - 1) {
					values = Math.floor(Math.random() * 9);
					if (!cardsArray[1].includes(values)) {
						cardsArray[1].push(values)
					}
				}
			}
		}


		for (let i = 1; cardsArray[2].length <= Azathoth[4][2] - 1; i++) {
			let values = Math.floor(Math.random() * 4);
			if (!cardsArray[2].includes(values)) {
				cardsArray[2].push(values)
			} else {
				while (cardsArray[2].length <= Azathoth[4][2] - 1) {
					values = Math.floor(Math.random() * 4);
					if (!cardsArray[2].includes(values)) {
						cardsArray[2].push(values)
					}
				}
			}

		}


		console.log(cardsArray)

		stage1array.push(cardsArray[0].slice(0, 1))
		stage1array.push(cardsArray[1].slice(0, 2))
		stage1array.push(cardsArray[2].slice(0, 1))
		stage2array.push(cardsArray[0].slice(1, 3))
		stage2array.push(cardsArray[1].slice(2, 5))
		stage2array.push(cardsArray[2].slice(1, 2))
		stage3array.push(cardsArray[0].slice(3, 5))
		stage3array.push(cardsArray[1].slice(5, 9))
		stage3array.push(0)



		stage1green.textContent = stage1array[0].length;
		stage1brown.textContent = stage1array[1].length;
		stage1blue.textContent = stage1array[2].length;
		stage2green.textContent = stage2array[0].length;
		stage2brown.textContent = stage2array[1].length;
		stage2blue.textContent = stage2array[2].length;
		stage3green.textContent = stage3array[0].length;
		stage3brown.textContent = stage3array[1].length;
		stage3blue.textContent = stage3array[2].length;


	} else if (chooseAncient === 'Cthulthu' && chooseLevel === 'superEasy') {
		for (let i = 1; cardsArray[0].length <= Cthulthu[4][0] - 1; i++) {
			let values = Math.floor(Math.random() * 5);
			if (!cardsArray[0].includes(values)) {
				cardsArray[0].push(values)
			} else {
				while (cardsArray[0].length <= Cthulthu[4][0] - 1) {
					values = Math.floor(Math.random() * 5);
					if (!cardsArray[0].includes(values)) {
						cardsArray[0].push(values)
					}
				}
			}
		}

		for (let i = 1; cardsArray[1].length <= Cthulthu[4][1] - 1; i++) {
			let values = Math.floor(Math.random() * 9);
			if (!cardsArray[1].includes(values)) {
				cardsArray[1].push(values)
			} else {
				while (cardsArray[1].length <= Cthulthu[4][1] - 1) {
					values = Math.floor(Math.random() * 9);
					if (!cardsArray[1].includes(values)) {
						cardsArray[1].push(values)
					}
				}
			}
		}


		for (let i = 1; cardsArray[2].length <= Cthulthu[4][2] - 1; i++) {
			let values = Math.floor(Math.random() * 4);
			if (!cardsArray[2].includes(values)) {
				cardsArray[2].push(values)
			} else {
				while (cardsArray[2].length <= Cthulthu[4][2] - 1) {
					values = Math.floor(Math.random() * 4);
					if (!cardsArray[2].includes(values)) {
						cardsArray[2].push(values)
					}
				}
			}

		}


		console.log(cardsArray)

		stage1array.push(0)
		stage1array.push(cardsArray[1].slice(0, 2))
		stage1array.push(cardsArray[2].slice(0, 2))
		stage2array.push(cardsArray[0].slice(0, 1))
		stage2array.push(cardsArray[1].slice(2, 5))
		stage2array.push(0)
		stage3array.push(cardsArray[0].slice(1, 4))
		stage3array.push(cardsArray[1].slice(5, 9))
		stage3array.push(0)



		stage1green.textContent = stage1array[0].length;
		stage1brown.textContent = stage1array[1].length;
		stage1blue.textContent = stage1array[2].length;
		stage2green.textContent = stage2array[0].length;
		stage2brown.textContent = stage2array[1].length;
		stage2blue.textContent = stage2array[2].length;
		stage3green.textContent = stage3array[0].length;
		stage3brown.textContent = stage3array[1].length;
		stage3blue.textContent = stage3array[2].length;


	} else if (chooseAncient === 'IogSothoth' && chooseLevel === 'superEasy') {
		for (let i = 1; cardsArray[0].length <= IogSothoth[4][0] - 1; i++) {
			let values = Math.floor(Math.random() * 5);
			if (!cardsArray[0].includes(values)) {
				cardsArray[0].push(values)
			} else {
				while (cardsArray[0].length <= IogSothoth[4][0] - 1) {
					values = Math.floor(Math.random() * 5);
					if (!cardsArray[0].includes(values)) {
						cardsArray[0].push(values)
					}
				}
			}
		}

		for (let i = 1; cardsArray[1].length <= IogSothoth[4][1] - 1; i++) {
			let values = Math.floor(Math.random() * 9);
			if (!cardsArray[1].includes(values)) {
				cardsArray[1].push(values)
			} else {
				while (cardsArray[1].length <= IogSothoth[4][1] - 1) {
					values = Math.floor(Math.random() * 9);
					if (!cardsArray[1].includes(values)) {
						cardsArray[1].push(values)
					}
				}
			}
		}


		for (let i = 1; i <= IogSothoth[4][2]; i++) {
			let values = Math.floor(Math.random() * 4);
			if (!cardsArray[2].includes(values)) {
				cardsArray[2].push(values)
			} else {
				while (cardsArray[2].length <= IogSothoth[4][2] - 1) {
					values = Math.floor(Math.random() * 4);
					if (!cardsArray[2].includes(values)) {
						cardsArray[2].push(values)
					}
				}
			}

		}


		console.log(cardsArray)

		stage1array.push(0)
		stage1array.push(cardsArray[1].slice(0, 2))
		stage1array.push(cardsArray[2].slice(0, 1))
		stage2array.push(cardsArray[0].slice(0, 2))
		stage2array.push(cardsArray[1].slice(2, 5))
		stage2array.push(cardsArray[2].slice(1, 2))
		stage3array.push(cardsArray[0].slice(2, 5))
		stage3array.push(cardsArray[1].slice(5, 9))
		stage3array.push(0)



		stage1green.textContent = stage1array[0].length;
		stage1brown.textContent = stage1array[1].length;
		stage1blue.textContent = stage1array[2].length;
		stage2green.textContent = stage2array[0].length;
		stage2brown.textContent = stage2array[1].length;
		stage2blue.textContent = stage2array[2].length;
		stage3green.textContent = stage3array[0].length;
		stage3brown.textContent = stage3array[1].length;
		stage3blue.textContent = stage3array[2].length;


	} else if (chooseAncient === 'ShubNiggurath' && chooseLevel === 'superEasy') {
		for (let i = 1; cardsArray[0].length <= ShubNiggurath[4][0] - 1; i++) {
			let values = Math.floor(Math.random() * 6);
			if (!cardsArray[0].includes(values)) {
				cardsArray[0].push(values)
			} else {
				while (cardsArray[0].length <= ShubNiggurath[4][0] - 1) {
					values = Math.floor(Math.random() * 6);
					if (!cardsArray[0].includes(values)) {
						cardsArray[0].push(values)
					}
				}
			}
		}

		for (let i = 1; cardsArray[1].length <= ShubNiggurath[4][1] - 1; i++) {
			let values = Math.floor(Math.random() * 9);
			if (!cardsArray[1].includes(values)) {
				cardsArray[1].push(values)
			} else {
				while (cardsArray[1].length <= ShubNiggurath[4][1] - 1) {
					values = Math.floor(Math.random() * 9);
					if (!cardsArray[1].includes(values)) {
						cardsArray[1].push(values)
					}
				}
			}
		}


		for (let i = 1; cardsArray[2].length <= ShubNiggurath[4][2] - 1; i++) {
			let values = Math.floor(Math.random() * 4);
			if (!cardsArray[2].includes(values)) {
				cardsArray[2].push(values)
			} else {
				while (cardsArray[2].length <= ShubNiggurath[4][2] - 1) {
					values = Math.floor(Math.random() * 4);
					if (!cardsArray[2].includes(values)) {
						cardsArray[2].push(values)
					}
				}
			}

		}


		console.log(cardsArray)

		stage1array.push(cardsArray[0].slice(0, 1))
		stage1array.push(cardsArray[1].slice(0, 2))
		stage1array.push(cardsArray[2].slice(0, 1))
		stage2array.push(cardsArray[0].slice(1, 4))
		stage2array.push(cardsArray[1].slice(2, 4))
		stage2array.push(cardsArray[2].slice(1, 2))
		stage3array.push(cardsArray[0].slice(4, 6))
		stage3array.push(cardsArray[1].slice(4, 8))
		stage3array.push(0)



		stage1green.textContent = stage1array[0].length;
		stage1brown.textContent = stage1array[1].length;
		stage1blue.textContent = stage1array[2].length;
		stage2green.textContent = stage2array[0].length;
		stage2brown.textContent = stage2array[1].length;
		stage2blue.textContent = stage2array[2].length;
		stage3green.textContent = stage3array[0].length;
		stage3brown.textContent = stage3array[1].length;
		stage3blue.textContent = stage3array[2].length;


	} else if (chooseAncient === 'Azathoth' && chooseLevel === 'easy') {
		for (let i = 1; cardsArray[0].length <= Azathoth[4][0] - 1; i++) {
			let values = Math.floor(Math.random() * 13);
			if (!cardsArray[0].includes(values)) {
				cardsArray[0].push(values)
			} else {
				while (cardsArray[0].length <= Azathoth[4][0] - 1) {
					values = Math.floor(Math.random() * 13);
					if (!cardsArray[0].includes(values)) {
						cardsArray[0].push(values)
					}
				}
			}
		}

		for (let i = 1; cardsArray[1].length <= Azathoth[4][1] - 1; i++) {
			let values = Math.floor(Math.random() * 16);
			if (!cardsArray[1].includes(values)) {
				cardsArray[1].push(values)
			} else {
				while (cardsArray[1].length <= Azathoth[4][1] - 1) {
					values = Math.floor(Math.random() * 16);
					if (!cardsArray[1].includes(values)) {
						cardsArray[1].push(values)
					}
				}
			}
		}


		for (let i = 1; cardsArray[2].length <= Azathoth[4][2] - 1; i++) {
			let values = Math.floor(Math.random() * 8);
			if (!cardsArray[2].includes(values)) {
				cardsArray[2].push(values)
			} else {
				while (cardsArray[2].length <= Azathoth[4][2] - 1) {
					values = Math.floor(Math.random() * 8);
					if (!cardsArray[2].includes(values)) {
						cardsArray[2].push(values)
					}
				}
			}

		}


		console.log(cardsArray)

		stage1array.push(cardsArray[0].slice(0, 1))
		stage1array.push(cardsArray[1].slice(0, 2))
		stage1array.push(cardsArray[2].slice(0, 1))
		stage2array.push(cardsArray[0].slice(1, 3))
		stage2array.push(cardsArray[1].slice(2, 5))
		stage2array.push(cardsArray[2].slice(1, 2))
		stage3array.push(cardsArray[0].slice(3, 5))
		stage3array.push(cardsArray[1].slice(5, 9))
		stage3array.push(0)



		stage1green.textContent = stage1array[0].length;
		stage1brown.textContent = stage1array[1].length;
		stage1blue.textContent = stage1array[2].length;
		stage2green.textContent = stage2array[0].length;
		stage2brown.textContent = stage2array[1].length;
		stage2blue.textContent = stage2array[2].length;
		stage3green.textContent = stage3array[0].length;
		stage3brown.textContent = stage3array[1].length;
		stage3blue.textContent = stage3array[2].length;


	} else if (chooseAncient === 'Cthulthu' && chooseLevel === 'easy') {
		for (let i = 1; cardsArray[0].length <= Cthulthu[4][0] - 1; i++) {
			let values = Math.floor(Math.random() * 13);
			if (!cardsArray[0].includes(values)) {
				cardsArray[0].push(values)
			} else {
				while (cardsArray[0].length <= Cthulthu[4][0] - 1) {
					values = Math.floor(Math.random() * 13);
					if (!cardsArray[0].includes(values)) {
						cardsArray[0].push(values)
					}
				}
			}
		}

		for (let i = 1; cardsArray[1].length <= Cthulthu[4][1] - 1; i++) {
			let values = Math.floor(Math.random() * 16);
			if (!cardsArray[1].includes(values)) {
				cardsArray[1].push(values)
			} else {
				while (cardsArray[1].length <= Cthulthu[4][1] - 1) {
					values = Math.floor(Math.random() * 16);
					if (!cardsArray[1].includes(values)) {
						cardsArray[1].push(values)
					}
				}
			}
		}


		for (let i = 1; cardsArray[2].length <= Cthulthu[4][2] - 1; i++) {
			let values = Math.floor(Math.random() * 8);
			if (!cardsArray[2].includes(values)) {
				cardsArray[2].push(values)
			} else {
				while (cardsArray[2].length <= Cthulthu[4][2] - 1) {
					values = Math.floor(Math.random() * 8);
					if (!cardsArray[2].includes(values)) {
						cardsArray[2].push(values)
					}
				}
			}

		}


		console.log(cardsArray)

		stage1array.push(0)
		stage1array.push(cardsArray[1].slice(0, 2))
		stage1array.push(cardsArray[2].slice(0, 2))
		stage2array.push(cardsArray[0].slice(0, 1))
		stage2array.push(cardsArray[1].slice(2, 5))
		stage2array.push(0)
		stage3array.push(cardsArray[0].slice(1, 4))
		stage3array.push(cardsArray[1].slice(5, 9))
		stage3array.push(0)



		stage1green.textContent = stage1array[0].length;
		stage1brown.textContent = stage1array[1].length;
		stage1blue.textContent = stage1array[2].length;
		stage2green.textContent = stage2array[0].length;
		stage2brown.textContent = stage2array[1].length;
		stage2blue.textContent = stage2array[2].length;
		stage3green.textContent = stage3array[0].length;
		stage3brown.textContent = stage3array[1].length;
		stage3blue.textContent = stage3array[2].length;


	} else if (chooseAncient === 'IogSothoth' && chooseLevel === 'easy') {
		for (let i = 1; cardsArray[0].length <= IogSothoth[4][0] - 1; i++) {
			let values = Math.floor(Math.random() * 13);
			if (!cardsArray[0].includes(values)) {
				cardsArray[0].push(values)
			} else {
				while (cardsArray[0].length <= IogSothoth[4][0] - 1) {
					values = Math.floor(Math.random() * 13);
					if (!cardsArray[0].includes(values)) {
						cardsArray[0].push(values)
					}
				}
			}
		}

		for (let i = 1; cardsArray[1].length <= IogSothoth[4][1] - 1; i++) {
			let values = Math.floor(Math.random() * 16);
			if (!cardsArray[1].includes(values)) {
				cardsArray[1].push(values)
			} else {
				while (cardsArray[1].length <= IogSothoth[4][1] - 1) {
					values = Math.floor(Math.random() * 16);
					if (!cardsArray[1].includes(values)) {
						cardsArray[1].push(values)
					}
				}
			}
		}


		for (let i = 1; cardsArray[2].length <= IogSothoth[4][2] - 1; i++) {
			let values = Math.floor(Math.random() * 8);
			if (!cardsArray[2].includes(values)) {
				cardsArray[2].push(values)
			} else {
				while (cardsArray[2].length <= IogSothoth[4][2] - 1) {
					values = Math.floor(Math.random() * 8);
					if (!cardsArray[2].includes(values)) {
						cardsArray[2].push(values)
					}
				}
			}

		}


		console.log(cardsArray)

		stage1array.push(0)
		stage1array.push(cardsArray[1].slice(0, 2))
		stage1array.push(cardsArray[2].slice(0, 1))
		stage2array.push(cardsArray[0].slice(0, 2))
		stage2array.push(cardsArray[1].slice(2, 5))
		stage2array.push(cardsArray[2].slice(1, 2))
		stage3array.push(cardsArray[0].slice(2, 5))
		stage3array.push(cardsArray[1].slice(5, 9))
		stage3array.push(0)



		stage1green.textContent = stage1array[0].length;
		stage1brown.textContent = stage1array[1].length;
		stage1blue.textContent = stage1array[2].length;
		stage2green.textContent = stage2array[0].length;
		stage2brown.textContent = stage2array[1].length;
		stage2blue.textContent = stage2array[2].length;
		stage3green.textContent = stage3array[0].length;
		stage3brown.textContent = stage3array[1].length;
		stage3blue.textContent = stage3array[2].length;



	} else if (chooseAncient === 'ShubNiggurath' && chooseLevel === 'easy') {
		for (let i = 1; cardsArray[0].length <= ShubNiggurath[4][0] - 1; i++) {
			let values = Math.floor(Math.random() * 13);
			if (!cardsArray[0].includes(values)) {
				cardsArray[0].push(values)
			} else {
				while (cardsArray[0].length <= ShubNiggurath[4][0] - 1) {
					values = Math.floor(Math.random() * 13);
					if (!cardsArray[0].includes(values)) {
						cardsArray[0].push(values)
					}
				}
			}
		}

		for (let i = 1; cardsArray[1].length <= ShubNiggurath[4][1] - 1; i++) {
			let values = Math.floor(Math.random() * 16);
			if (!cardsArray[1].includes(values)) {
				cardsArray[1].push(values)
			} else {
				while (cardsArray[1].length <= ShubNiggurath[4][1] - 1) {
					values = Math.floor(Math.random() * 16);
					if (!cardsArray[1].includes(values)) {
						cardsArray[1].push(values)
					}
				}
			}
		}


		for (let i = 1; cardsArray[2].length <= ShubNiggurath[4][2] - 1; i++) {
			let values = Math.floor(Math.random() * 8);
			if (!cardsArray[2].includes(values)) {
				cardsArray[2].push(values)
			} else {
				while (cardsArray[2].length <= ShubNiggurath[4][2] - 1) {
					values = Math.floor(Math.random() * 8);
					if (!cardsArray[2].includes(values)) {
						cardsArray[2].push(values)
					}
				}
			}

		}


		console.log(cardsArray)

		stage1array.push(cardsArray[0].slice(0, 1))
		stage1array.push(cardsArray[1].slice(0, 2))
		stage1array.push(cardsArray[2].slice(0, 1))
		stage2array.push(cardsArray[0].slice(1, 4))
		stage2array.push(cardsArray[1].slice(2, 4))
		stage2array.push(cardsArray[2].slice(1, 2))
		stage3array.push(cardsArray[0].slice(4, 6))
		stage3array.push(cardsArray[1].slice(4, 8))
		stage3array.push(0)



		stage1green.textContent = stage1array[0].length;
		stage1brown.textContent = stage1array[1].length;
		stage1blue.textContent = stage1array[2].length;
		stage2green.textContent = stage2array[0].length;
		stage2brown.textContent = stage2array[1].length;
		stage2blue.textContent = stage2array[2].length;
		stage3green.textContent = stage3array[0].length;
		stage3brown.textContent = stage3array[1].length;
		stage3blue.textContent = stage3array[2].length;



	} else if (chooseAncient === 'Azathoth' && chooseLevel === 'difficult') {
		for (let i = 1; cardsArray[0].length <= Azathoth[4][0] - 1; i++) {
			let values = Math.floor(4 + Math.random() * 8);
			if (!cardsArray[0].includes(values)) {
				cardsArray[0].push(values)
			} else {
				while (cardsArray[0].length <= Azathoth[4][0] - 1) {
					values = Math.floor(4 + Math.random() * 8);
					if (!cardsArray[0].includes(values)) {
						cardsArray[0].push(values)
					}
				}
			}
		}

		for (let i = 1; cardsArray[1].length <= Azathoth[4][1] - 1; i++) {
			let values = Math.floor(5 + Math.random() * 13);
			if (!cardsArray[1].includes(values)) {
				cardsArray[1].push(values)
			} else {
				while (cardsArray[1].length <= Azathoth[4][1] - 1) {
					values = Math.floor(5 + Math.random() * 13);
					if (!cardsArray[1].includes(values)) {
						cardsArray[1].push(values)
					}
				}
			}
		}


		for (let i = 1; cardsArray[2].length <= Azathoth[4][2] - 1; i++) {
			let values = Math.floor(4 + Math.random() * 8);
			if (!cardsArray[2].includes(values)) {
				cardsArray[2].push(values)
			} else {
				while (cardsArray[2].length <= Azathoth[4][2] - 1) {
					values = Math.floor(4 + Math.random() * 8);
					if (!cardsArray[2].includes(values)) {
						cardsArray[2].push(values)
					}
				}
			}

		}


		console.log(cardsArray)

		stage1array.push(cardsArray[0].slice(0, 1))
		stage1array.push(cardsArray[1].slice(0, 2))
		stage1array.push(cardsArray[2].slice(0, 1))
		stage2array.push(cardsArray[0].slice(1, 3))
		stage2array.push(cardsArray[1].slice(2, 5))
		stage2array.push(cardsArray[2].slice(1, 2))
		stage3array.push(cardsArray[0].slice(3, 5))
		stage3array.push(cardsArray[1].slice(5, 9))
		stage3array.push(0)



		stage1green.textContent = stage1array[0].length;
		stage1brown.textContent = stage1array[1].length;
		stage1blue.textContent = stage1array[2].length;
		stage2green.textContent = stage2array[0].length;
		stage2brown.textContent = stage2array[1].length;
		stage2blue.textContent = stage2array[2].length;
		stage3green.textContent = stage3array[0].length;
		stage3brown.textContent = stage3array[1].length;
		stage3blue.textContent = stage3array[2].length;


	} else if (chooseAncient === 'Cthulthu' && chooseLevel === 'difficult') {
		for (let i = 1; cardsArray[0].length <= Cthulthu[4][0] - 1; i++) {
			let values = Math.floor(5 + Math.random() * 13);
			if (!cardsArray[0].includes(values)) {
				cardsArray[0].push(values)
			} else {
				while (cardsArray[0].length <= Cthulthu[4][0] - 1) {
					values = Math.floor(5 + Math.random() * 13);
					if (!cardsArray[0].includes(values)) {
						cardsArray[0].push(values)
					}
				}
			}
		}

		for (let i = 1; cardsArray[1].length <= Cthulthu[4][1] - 1; i++) {
			let values = Math.floor(5 + Math.random() * 16);
			if (!cardsArray[1].includes(values)) {
				cardsArray[1].push(values)
			} else {
				while (cardsArray[1].length <= Cthulthu[4][1] - 1) {
					values = Math.floor(5 + Math.random() * 16);
					if (!cardsArray[1].includes(values)) {
						cardsArray[1].push(values)
					}
				}
			}
		}


		for (let i = 1; cardsArray[2].length <= Cthulthu[4][2] - 1; i++) {
			let values = Math.floor(4 + Math.random() * 8);
			if (!cardsArray[2].includes(values)) {
				cardsArray[2].push(values)
			} else {
				while (cardsArray[2].length <= Cthulthu[4][2] - 1) {
					values = Math.floor(4 + Math.random() * 8);
					if (!cardsArray[2].includes(values)) {
						cardsArray[2].push(values)
					}
				}
			}

		}


		console.log(cardsArray)

		stage1array.push(0)
		stage1array.push(cardsArray[1].slice(0, 2))
		stage1array.push(cardsArray[2].slice(0, 2))
		stage2array.push(cardsArray[0].slice(0, 1))
		stage2array.push(cardsArray[1].slice(2, 5))
		stage2array.push(0)
		stage3array.push(cardsArray[0].slice(1, 4))
		stage3array.push(cardsArray[1].slice(5, 9))
		stage3array.push(0)



		stage1green.textContent = stage1array[0].length;
		stage1brown.textContent = stage1array[1].length;
		stage1blue.textContent = stage1array[2].length;
		stage2green.textContent = stage2array[0].length;
		stage2brown.textContent = stage2array[1].length;
		stage2blue.textContent = stage2array[2].length;
		stage3green.textContent = stage3array[0].length;
		stage3brown.textContent = stage3array[1].length;
		stage3blue.textContent = stage3array[2].length;


	} else if (chooseAncient === 'IogSothoth' && chooseLevel === 'difficult') {
		for (let i = 1; cardsArray[0].length <= IogSothoth[4][0] - 1; i++) {
			let values = Math.floor(5 + Math.random() * 13);
			if (!cardsArray[0].includes(values)) {
				cardsArray[0].push(values)
			} else {
				while (cardsArray[0].length <= IogSothoth[4][0] - 1) {
					values = Math.floor(5 + Math.random() * 13);
					if (!cardsArray[0].includes(values)) {
						cardsArray[0].push(values)
					}
				}
			}
		}

		for (let i = 1; cardsArray[1].length <= IogSothoth[4][1] - 1; i++) {
			let values = Math.floor(5 + Math.random() * 16);
			if (!cardsArray[1].includes(values)) {
				cardsArray[1].push(values)
			} else {
				while (cardsArray[1].length <= IogSothoth[4][1] - 1) {
					values = Math.floor(5 + Math.random() * 16);
					if (!cardsArray[1].includes(values)) {
						cardsArray[1].push(values)
					}
				}
			}
		}


		for (let i = 1; cardsArray[2].length <= IogSothoth[4][2] - 1; i++) {
			let values = Math.floor(4 + Math.random() * 8);
			if (!cardsArray[2].includes(values)) {
				cardsArray[2].push(values)
			} else {
				while (cardsArray[2].length <= IogSothoth[4][2] - 1) {
					values = Math.floor(4 + Math.random() * 8);
					if (!cardsArray[2].includes(values)) {
						cardsArray[2].push(values)
					}
				}
			}

		}


		console.log(cardsArray)

		stage1array.push(0)
		stage1array.push(cardsArray[1].slice(0, 2))
		stage1array.push(cardsArray[2].slice(0, 1))
		stage2array.push(cardsArray[0].slice(0, 2))
		stage2array.push(cardsArray[1].slice(2, 5))
		stage2array.push(cardsArray[2].slice(1, 2))
		stage3array.push(cardsArray[0].slice(2, 5))
		stage3array.push(cardsArray[1].slice(5, 9))
		stage3array.push(0)



		stage1green.textContent = stage1array[0].length;
		stage1brown.textContent = stage1array[1].length;
		stage1blue.textContent = stage1array[2].length;
		stage2green.textContent = stage2array[0].length;
		stage2brown.textContent = stage2array[1].length;
		stage2blue.textContent = stage2array[2].length;
		stage3green.textContent = stage3array[0].length;
		stage3brown.textContent = stage3array[1].length;
		stage3blue.textContent = stage3array[2].length;


	} else if (chooseAncient === 'ShubNiggurath' && chooseLevel === 'difficult') {
		for (let i = 1; cardsArray[0].length <= ShubNiggurath[4][0] - 1; i++) {
			let values = Math.floor(4 + Math.random() * 8);
			if (!cardsArray[0].includes(values)) {
				cardsArray[0].push(values)
			} else {
				while (cardsArray[0].length <= ShubNiggurath[4][0] - 1) {
					values = Math.floor(4 + Math.random() * 8);
					if (!cardsArray[0].includes(values)) {
						cardsArray[0].push(values)
					}
				}
			}
		}

		for (let i = 1; cardsArray[1].length <= ShubNiggurath[4][1] - 1; i++) {
			let values = Math.floor(5 + Math.random() * 13);
			if (!cardsArray[1].includes(values)) {
				cardsArray[1].push(values)
			} else {
				while (cardsArray[1].length <= ShubNiggurath[4][1] - 1) {
					values = Math.floor(5 + Math.random() * 13);
					if (!cardsArray[1].includes(values)) {
						cardsArray[1].push(values)
					}
				}
			}
		}


		for (let i = 1; cardsArray[2].length <= ShubNiggurath[4][2] - 1; i++) {
			let values = Math.floor(4 + Math.random() * 8);
			if (!cardsArray[2].includes(values)) {
				cardsArray[2].push(values)
			} else {
				while (cardsArray[2].length <= ShubNiggurath[4][2] - 1) {
					values = Math.floor(4 + Math.random() * 8);
					if (!cardsArray[2].includes(values)) {
						cardsArray[2].push(values)
					}
				}
			}

		}


		console.log(cardsArray)

		stage1array.push(cardsArray[0].slice(0, 1))
		stage1array.push(cardsArray[1].slice(0, 2))
		stage1array.push(cardsArray[2].slice(0, 1))
		stage2array.push(cardsArray[0].slice(1, 4))
		stage2array.push(cardsArray[1].slice(2, 4))
		stage2array.push(cardsArray[2].slice(1, 2))
		stage3array.push(cardsArray[0].slice(4, 6))
		stage3array.push(cardsArray[1].slice(4, 8))
		stage3array.push(0)



		stage1green.textContent = stage1array[0].length;
		stage1brown.textContent = stage1array[1].length;
		stage1blue.textContent = stage1array[2].length;
		stage2green.textContent = stage2array[0].length;
		stage2brown.textContent = stage2array[1].length;
		stage2blue.textContent = stage2array[2].length;
		stage3green.textContent = stage3array[0].length;
		stage3brown.textContent = stage3array[1].length;
		stage3blue.textContent = stage3array[2].length;


	} else if (chooseAncient === 'Azathoth' && chooseLevel === 'superDifficult') {
		for (let i = 1; cardsArray[0].length <= Azathoth[4][0] - 1; i++) {
			let values = Math.floor(13 + Math.random() * 5);
			if (!cardsArray[0].includes(values)) {
				cardsArray[0].push(values)
			} else {
				while (cardsArray[0].length <= Azathoth[4][0] - 1) {
					values = Math.floor(13 + Math.random() * 5);
					if (!cardsArray[0].includes(values)) {
						cardsArray[0].push(values)
					}
				}
			}
		}

		for (let i = 1; cardsArray[1].length <= Azathoth[4][1] - 1; i++) {
			let values = Math.floor(12 + Math.random() * 9);
			if (!cardsArray[1].includes(values)) {
				cardsArray[1].push(values)
			} else {
				while (cardsArray[1].length <= Azathoth[4][1] - 1) {
					values = Math.floor(12 + Math.random() * 9);
					if (!cardsArray[1].includes(values)) {
						cardsArray[1].push(values)
					}
				}
			}
		}


		for (let i = 1; cardsArray[2].length <= Azathoth[4][2] - 1; i++) {
			let values = Math.floor(8 + Math.random() * 4);
			if (!cardsArray[2].includes(values)) {
				cardsArray[2].push(values)
			} else {
				while (cardsArray[2].length <= Azathoth[4][2] - 1) {
					values = Math.floor(8 + Math.random() * 4);
					if (!cardsArray[2].includes(values)) {
						cardsArray[2].push(values)
					}
				}
			}

		}


		console.log(cardsArray)

		stage1array.push(cardsArray[0].slice(0, 1))
		stage1array.push(cardsArray[1].slice(0, 2))
		stage1array.push(cardsArray[2].slice(0, 1))
		stage2array.push(cardsArray[0].slice(1, 3))
		stage2array.push(cardsArray[1].slice(2, 5))
		stage2array.push(cardsArray[2].slice(1, 2))
		stage3array.push(cardsArray[0].slice(3, 5))
		stage3array.push(cardsArray[1].slice(5, 9))
		stage3array.push(0)



		stage1green.textContent = stage1array[0].length;
		stage1brown.textContent = stage1array[1].length;
		stage1blue.textContent = stage1array[2].length;
		stage2green.textContent = stage2array[0].length;
		stage2brown.textContent = stage2array[1].length;
		stage2blue.textContent = stage2array[2].length;
		stage3green.textContent = stage3array[0].length;
		stage3brown.textContent = stage3array[1].length;
		stage3blue.textContent = stage3array[2].length;


	} else if (chooseAncient === 'Cthulthu' && chooseLevel === 'superDifficult') {
		for (let i = 1; cardsArray[0].length <= Cthulthu[4][0] - 1; i++) {
			let values = Math.floor(13 + Math.random() * 5);
			if (!cardsArray[0].includes(values)) {
				cardsArray[0].push(values)
			} else {
				while (cardsArray[0].length <= Cthulthu[4][0] - 1) {
					values = Math.floor(13 + Math.random() * 5);
					if (!cardsArray[0].includes(values)) {
						cardsArray[0].push(values)
					}
				}
			}
		}

		for (let i = 1; cardsArray[1].length <= Cthulthu[4][1] - 1; i++) {
			let values = Math.floor(12 + Math.random() * 9);
			if (!cardsArray[1].includes(values)) {
				cardsArray[1].push(values)
			} else {
				while (cardsArray[1].length <= Cthulthu[4][1] - 1) {
					values = Math.floor(12 + Math.random() * 9);
					if (!cardsArray[1].includes(values)) {
						cardsArray[1].push(values)
					}
				}
			}
		}


		for (let i = 1; cardsArray[2].length <= Cthulthu[4][2] - 1; i++) {
			let values = Math.floor(8 + Math.random() * 4);
			if (!cardsArray[2].includes(values)) {
				cardsArray[2].push(values)
			} else {
				while (cardsArray[2].length <= Cthulthu[4][2] - 1) {
					values = Math.floor(8 + Math.random() * 4);
					if (!cardsArray[2].includes(values)) {
						cardsArray[2].push(values)
					}
				}
			}

		}


		console.log(cardsArray)

		stage1array.push(0)
		stage1array.push(cardsArray[1].slice(0, 2))
		stage1array.push(cardsArray[2].slice(0, 2))
		stage2array.push(cardsArray[0].slice(0, 1))
		stage2array.push(cardsArray[1].slice(2, 5))
		stage2array.push(0)
		stage3array.push(cardsArray[0].slice(1, 4))
		stage3array.push(cardsArray[1].slice(5, 9))
		stage3array.push(0)



		stage1green.textContent = stage1array[0].length;
		stage1brown.textContent = stage1array[1].length;
		stage1blue.textContent = stage1array[2].length;
		stage2green.textContent = stage2array[0].length;
		stage2brown.textContent = stage2array[1].length;
		stage2blue.textContent = stage2array[2].length;
		stage3green.textContent = stage3array[0].length;
		stage3brown.textContent = stage3array[1].length;
		stage3blue.textContent = stage3array[2].length;


	} else if (chooseAncient === 'IogSothoth' && chooseLevel === 'superDifficult') {
		for (let i = 1; cardsArray[0].length <= IogSothoth[4][0] - 1; i++) {
			let values = Math.floor(13 + Math.random() * 5);
			if (!cardsArray[0].includes(values)) {
				cardsArray[0].push(values)
			} else {
				while (cardsArray[0].length <= IogSothoth[4][0] - 1) {
					values = Math.floor(13 + Math.random() * 5);
					if (!cardsArray[0].includes(values)) {
						cardsArray[0].push(values)
					}
				}
			}
		}

		for (let i = 1; cardsArray[1].length <= IogSothoth[4][1] - 1; i++) {
			let values = Math.floor(12 + Math.random() * 9);
			if (!cardsArray[1].includes(values)) {
				cardsArray[1].push(values)
			} else {
				while (cardsArray[1].length <= IogSothoth[4][1] - 1) {
					values = Math.floor(12 + Math.random() * 9);
					if (!cardsArray[1].includes(values)) {
						cardsArray[1].push(values)
					}
				}
			}
		}


		for (let i = 1; cardsArray[2].length <= IogSothoth[4][2] - 1; i++) {
			let values = Math.floor(8 + Math.random() * 4);
			if (!cardsArray[2].includes(values)) {
				cardsArray[2].push(values)
			} else {
				while (cardsArray[2].length <= IogSothoth[4][2] - 1) {
					values = Math.floor(8 + Math.random() * 4);
					if (!cardsArray[2].includes(values)) {
						cardsArray[2].push(values)
					}
				}
			}

		}


		console.log(cardsArray)

		stage1array.push(0)
		stage1array.push(cardsArray[1].slice(0, 2))
		stage1array.push(cardsArray[2].slice(0, 1))
		stage2array.push(cardsArray[0].slice(0, 2))
		stage2array.push(cardsArray[1].slice(2, 5))
		stage2array.push(cardsArray[2].slice(1, 2))
		stage3array.push(cardsArray[0].slice(2, 5))
		stage3array.push(cardsArray[1].slice(5, 9))
		stage3array.push(0)



		stage1green.textContent = stage1array[0].length;
		stage1brown.textContent = stage1array[1].length;
		stage1blue.textContent = stage1array[2].length;
		stage2green.textContent = stage2array[0].length;
		stage2brown.textContent = stage2array[1].length;
		stage2blue.textContent = stage2array[2].length;
		stage3green.textContent = stage3array[0].length;
		stage3brown.textContent = stage3array[1].length;
		stage3blue.textContent = stage3array[2].length;


	} else if (chooseAncient === 'ShubNiggurath' && chooseLevel === 'superDifficult') {
		for (let i = 1; cardsArray[0].length <= ShubNiggurath[4][0] - 1; i++) {
			let values = Math.floor(12 + Math.random() * 6);
			if (!cardsArray[0].includes(values)) {
				cardsArray[0].push(values)
			} else {
				while (cardsArray[0].length <= ShubNiggurath[4][0] - 1) {
					values = Math.floor(12 + Math.random() * 6);
					if (!cardsArray[0].includes(values)) {
						cardsArray[0].push(values)
					}
				}
			}
		}

		for (let i = 1; cardsArray[1].length <= ShubNiggurath[4][1] - 1; i++) {
			let values = Math.floor(13 + Math.random() * 8);
			if (!cardsArray[1].includes(values)) {
				cardsArray[1].push(values)
			} else {
				while (cardsArray[1].length <= ShubNiggurath[4][1] - 1) {
					values = Math.floor(13 + Math.random() * 8);
					if (!cardsArray[1].includes(values)) {
						cardsArray[1].push(values)
					}
				}
			}
		}


		for (let i = 1; cardsArray[2].length <= ShubNiggurath[4][2] - 1; i++) {
			let values = Math.floor(8 + Math.random() * 4);
			if (!cardsArray[2].includes(values)) {
				cardsArray[2].push(values)
			} else {
				while (cardsArray[2].length <= ShubNiggurath[4][2] - 1) {
					values = Math.floor(8 + Math.random() * 4);
					if (!cardsArray[2].includes(values)) {
						cardsArray[2].push(values)
					}
				}
			}

		}


		console.log(cardsArray)

		stage1array.push(cardsArray[0].slice(0, 1))
		stage1array.push(cardsArray[1].slice(0, 2))
		stage1array.push(cardsArray[2].slice(0, 1))
		stage2array.push(cardsArray[0].slice(1, 4))
		stage2array.push(cardsArray[1].slice(2, 4))
		stage2array.push(cardsArray[2].slice(1, 2))
		stage3array.push(cardsArray[0].slice(4, 6))
		stage3array.push(cardsArray[1].slice(4, 8))
		stage3array.push(0)



		stage1green.textContent = stage1array[0].length;
		stage1brown.textContent = stage1array[1].length;
		stage1blue.textContent = stage1array[2].length;
		stage2green.textContent = stage2array[0].length;
		stage2brown.textContent = stage2array[1].length;
		stage2blue.textContent = stage2array[2].length;
		stage3green.textContent = stage3array[0].length;
		stage3brown.textContent = stage3array[1].length;
		stage3blue.textContent = stage3array[2].length;


	}
}


)


/* перезапустить шффл карт  */


deckShuffleNew.addEventListener('click', function () {
	window.location.reload();
}
)


/* вывод карт */

const deck = document.querySelector('.deck')
const lastCard = document.querySelector('.last-card')



deck.addEventListener('click', function () {
	if (stage1array[0].length > 0 || stage1array[1].length > 0 || stage1array[2].length > 0) {
		if (!stage1array[0].length == 0 && !stage1array[1].length == 0 && !stage1array[2].length == 0) {
			let randomColor = Math.floor(Math.random() * 3)

			if (randomColor == 0) {
				let picture = greenCard[1][stage1array[0][stage1array[0].length - 1]]
				lastCard.style.backgroundImage = `url('./green/${picture}.png')`;
				console.log(picture)
			} if (randomColor == 1) {
				let picture = brownCard[1][stage1array[1][stage1array[1].length - 1]]
				lastCard.style.backgroundImage = `url('./brown/${picture}.png')`;
				console.log(picture)
			} if (randomColor == 2) {
				let picture = blueCard[1][stage1array[2][stage1array[2].length - 1]]
				lastCard.style.backgroundImage = `url('./blue/${picture}.png')`;
				console.log(picture)
			}



			stage1array[randomColor].pop();
			stage1green.textContent = stage1array[0].length;
			stage1brown.textContent = stage1array[1].length;
			stage1blue.textContent = stage1array[2].length;
		} else if (!stage1array[0].length == 0 && !stage1array[1].length == 0 && stage1array[2].length == 0) {
			let randomColor = Math.floor(Math.random() * 2)

			if (randomColor == 0) {
				let picture = greenCard[1][stage1array[0][stage1array[0].length - 1]]
				lastCard.style.backgroundImage = `url('./green/${picture}.png')`;
				console.log(picture)
			} if (randomColor == 1) {
				let picture = brownCard[1][stage1array[1][stage1array[1].length - 1]]
				lastCard.style.backgroundImage = `url('./brown/${picture}.png')`;
				console.log(picture)
			}

			stage1array[randomColor].pop();
			stage1green.textContent = stage1array[0].length;
			stage1brown.textContent = stage1array[1].length;
			stage1blue.textContent = stage1array[2].length;
		} else if (stage1array[0].length == 0 && !stage1array[1].length == 0 && !stage1array[2].length == 0) {
			let randomColor = 1 + Math.floor(Math.random() * 2)

			if (randomColor == 1) {
				let picture = brownCard[1][stage1array[1][stage1array[1].length - 1]]
				lastCard.style.backgroundImage = `url('./brown/${picture}.png')`;
				console.log(picture)
			} if (randomColor == 2) {
				let picture = blueCard[1][stage1array[2][stage1array[2].length - 1]]
				lastCard.style.backgroundImage = `url('./blue/${picture}.png')`;
				console.log(picture)
			}

			stage1array[randomColor].pop();
			stage1green.textContent = stage1array[0].length;
			stage1brown.textContent = stage1array[1].length;
			stage1blue.textContent = stage1array[2].length;
		} else if (!stage1array[0].length == 0 && stage1array[1].length == 0 && !stage1array[2].length == 0) {

			let randomColor;
			Math.random() < 0.5 ? randomColor = 0 : randomColor = 2;

			if (randomColor == 0) {
				let picture = greenCard[1][stage1array[0][stage1array[0].length - 1]]
				lastCard.style.backgroundImage = `url('./green/${picture}.png')`;
				console.log(picture)
			} if (randomColor == 2) {
				let picture = blueCard[1][stage1array[2][stage1array[2].length - 1]]
				lastCard.style.backgroundImage = `url('./blue/${picture}.png')`;
				console.log(picture)
			}

			stage1array[randomColor].pop();
			stage1green.textContent = stage1array[0].length;
			stage1brown.textContent = stage1array[1].length;
			stage1blue.textContent = stage1array[2].length;
		} else if (!stage1array[0].length == 0) {

			let picture = greenCard[1][stage1array[0][stage1array[0].length - 1]]
			lastCard.style.backgroundImage = `url('./green/${picture}.png')`;
			console.log(picture)

			stage1array[0].pop();
			stage1green.textContent = stage1array[0].length;
			stage1brown.textContent = stage1array[1].length;
			stage1blue.textContent = stage1array[2].length;
		} else if (!stage1array[1].length == 0) {

			let picture = brownCard[1][stage1array[1][stage1array[1].length - 1]]
			lastCard.style.backgroundImage = `url('./brown/${picture}.png')`;
			console.log(picture)

			stage1array[1].pop();
			stage1green.textContent = stage1array[0].length;
			stage1brown.textContent = stage1array[1].length;
			stage1blue.textContent = stage1array[2].length;
		} else if (!stage1array[2].length == 0) {

			let picture = blueCard[1][stage1array[2][stage1array[2].length - 1]]
			lastCard.style.backgroundImage = `url('./blue/${picture}.png')`;
			console.log(picture)

			stage1array[2].pop();
			stage1green.textContent = stage1array[0].length;
			stage1brown.textContent = stage1array[1].length;
			stage1blue.textContent = stage1array[2].length;
		}





	} else if (stage2array[0].length > 0 || stage2array[1].length > 0 || stage2array[2].length > 0) {
		if (!stage2array[0].length == 0 && !stage2array[1].length == 0 && !stage2array[2].length == 0) {
			let randomColor = Math.floor(Math.random() * 3)

			if (randomColor == 0) {
				let picture = greenCard[1][stage2array[0][stage2array[0].length - 1]]
				lastCard.style.backgroundImage = `url('./green/${picture}.png')`;
				console.log(picture)
			} if (randomColor == 1) {
				let picture = brownCard[1][stage2array[1][stage2array[1].length - 1]]
				lastCard.style.backgroundImage = `url('./brown/${picture}.png')`;
				console.log(picture)
			} if (randomColor == 2) {
				let picture = blueCard[1][stage2array[2][stage2array[2].length - 1]]
				lastCard.style.backgroundImage = `url('./blue/${picture}.png')`;
				console.log(picture)
			}

			stage2array[randomColor].pop();
			stage2green.textContent = stage2array[0].length;
			stage2brown.textContent = stage2array[1].length;
			stage2blue.textContent = stage2array[2].length;
		} else if (!stage2array[0].length == 0 && !stage2array[1].length == 0 && stage2array[2].length == 0) {
			let randomColor = Math.floor(Math.random() * 2)

			if (randomColor == 0) {
				let picture = greenCard[1][stage2array[0][stage2array[0].length - 1]]
				lastCard.style.backgroundImage = `url('./green/${picture}.png')`;
				console.log(picture)
			} if (randomColor == 1) {
				let picture = brownCard[1][stage2array[1][stage2array[1].length - 1]]
				lastCard.style.backgroundImage = `url('./brown/${picture}.png')`;
				console.log(picture)
			}

			stage2array[randomColor].pop();
			stage2green.textContent = stage2array[0].length;
			stage2brown.textContent = stage2array[1].length;
			stage2blue.textContent = stage2array[2].length;
		} else if (stage2array[0].length == 0 && !stage2array[1].length == 0 && !stage2array[2].length == 0) {
			let randomColor = 1 + Math.floor(Math.random() * 2)

			if (randomColor == 1) {
				let picture = brownCard[1][stage2array[1][stage2array[1].length - 1]]
				lastCard.style.backgroundImage = `url('./brown/${picture}.png')`;
				console.log(picture)
			} if (randomColor == 2) {
				let picture = blueCard[1][stage2array[2][stage2array[2].length - 1]]
				lastCard.style.backgroundImage = `url('./blue/${picture}.png')`;
				console.log(picture)
			}

			stage2array[randomColor].pop();
			stage2green.textContent = stage2array[0].length;
			stage2brown.textContent = stage2array[1].length;
			stage2blue.textContent = stage2array[2].length;
		} else if (!stage2array[0].length == 0 && stage2array[1].length == 0 && !stage2array[2].length == 0) {

			let randomColor;
			Math.random() < 0.5 ? randomColor = 0 : randomColor = 2;

			if (randomColor == 0) {
				let picture = greenCard[1][stage2array[0][stage2array[0].length - 1]]
				lastCard.style.backgroundImage = `url('./green/${picture}.png')`;
				console.log(picture)
			} if (randomColor == 2) {
				let picture = blueCard[1][stage2array[2][stage2array[2].length - 1]]
				lastCard.style.backgroundImage = `url('./blue/${picture}.png')`;
				console.log(picture)
			}

			stage2array[randomColor].pop();
			stage2green.textContent = stage2array[0].length;
			stage2brown.textContent = stage2array[1].length;
			stage2blue.textContent = stage2array[2].length;
		} else if (!stage2array[0].length == 0) {

			let picture = greenCard[1][stage2array[0][stage2array[0].length - 1]]
			lastCard.style.backgroundImage = `url('./green/${picture}.png')`;
			console.log(picture)

			stage2array[0].pop();
			stage2green.textContent = stage2array[0].length;
			stage2brown.textContent = stage2array[1].length;
			stage2blue.textContent = stage2array[2].length;
		} else if (!stage2array[1].length == 0) {

			let picture = brownCard[1][stage2array[1][stage2array[1].length - 1]]
			lastCard.style.backgroundImage = `url('./brown/${picture}.png')`;
			console.log(picture)

			stage2array[1].pop();
			stage2green.textContent = stage2array[0].length;
			stage2brown.textContent = stage2array[1].length;
			stage2blue.textContent = stage2array[2].length;
		} else if (!stage2array[2].length == 0) {

			let picture = blueCard[1][stage2array[2][stage2array[2].length - 1]]
			lastCard.style.backgroundImage = `url('./blue/${picture}.png')`;
			console.log(picture)

			stage2array[2].pop();
			stage2green.textContent = stage2array[0].length;
			stage2brown.textContent = stage2array[1].length;
			stage2blue.textContent = stage2array[2].length;
		}





	} else {
		if (!stage3array[0].length == 0 && !stage3array[1].length == 0 && !stage3array[2].length == 0) {
			let randomColor = Math.floor(Math.random() * 3)

			if (randomColor == 0) {
				let picture = greenCard[1][stage3array[0][stage3array[0].length - 1]]
				lastCard.style.backgroundImage = `url('./green/${picture}.png')`;
				console.log(picture)
			} if (randomColor == 1) {
				let picture = brownCard[1][stage3array[1][stage3array[1].length - 1]]
				lastCard.style.backgroundImage = `url('./brown/${picture}.png')`;
				console.log(picture)
			} if (randomColor == 2) {
				let picture = blueCard[1][stage3array[2][stage3array[2].length - 1]]
				lastCard.style.backgroundImage = `url('./blue/${picture}.png')`;
				console.log(picture)
			}

			stage3array[randomColor].pop();
			stage3green.textContent = stage3array[0].length;
			stage3brown.textContent = stage3array[1].length;
			stage3blue.textContent = stage3array[2].length;
		} else if (!stage3array[0].length == 0 && !stage3array[1].length == 0 && stage3array[2].length == 0) {
			let randomColor = Math.floor(Math.random() * 2)

			if (randomColor == 0) {
				let picture = greenCard[1][stage3array[0][stage3array[0].length - 1]]
				lastCard.style.backgroundImage = `url('./green/${picture}.png')`;
				console.log(picture)
			} if (randomColor == 1) {
				let picture = brownCard[1][stage3array[1][stage3array[1].length - 1]]
				lastCard.style.backgroundImage = `url('./brown/${picture}.png')`;
				console.log(picture)
			}

			stage3array[randomColor].pop();
			stage3green.textContent = stage3array[0].length;
			stage3brown.textContent = stage3array[1].length;
			stage3blue.textContent = stage3array[2].length;
		} else if (stage3array[0].length == 0 && !stage3array[1].length == 0 && !stage3array[2].length == 0) {
			let randomColor = 1 + Math.floor(Math.random() * 2)

			if (randomColor == 1) {
				let picture = greenCard[1][stage3array[1][stage3array[1].length - 1]]
				lastCard.style.backgroundImage = `url('./green/${picture}.png')`;
				console.log(picture)
			} if (randomColor == 2) {
				let picture = brownCard[1][stage3array[2][stage3array[2].length - 1]]
				lastCard.style.backgroundImage = `url('./brown/${picture}.png')`;
				console.log(picture)
			}

			stage3array[randomColor].pop();
			stage3green.textContent = stage3array[0].length;
			stage3brown.textContent = stage3array[1].length;
			stage3blue.textContent = stage3array[2].length;
		} else if (!stage3array[0].length == 0 && stage3array[1].length == 0 && !stage3array[2].length == 0) {

			let randomColor;
			Math.random() < 0.5 ? randomColor = 0 : randomColor = 2;

			if (randomColor == 0) {
				let picture = greenCard[1][stage3array[0][stage3array[0].length - 1]]
				lastCard.style.backgroundImage = `url('./green/${picture}.png')`;
				console.log(picture)
			} if (randomColor == 2) {
				let picture = blueCard[1][stage3array[2][stage3array[2].length - 1]]
				lastCard.style.backgroundImage = `url('./blue/${picture}.png')`;
				console.log(picture)
			}

			stage3array[randomColor].pop();
			stage3green.textContent = stage3array[0].length;
			stage3brown.textContent = stage3array[1].length;
			stage3blue.textContent = stage3array[2].length;
		} else if (!stage3array[0].length == 0) {

			let picture = greenCard[1][stage3array[0][stage3array[0].length - 1]]
			lastCard.style.backgroundImage = `url('./green/${picture}.png')`;
			console.log(picture)

			stage3array[0].pop();
			stage3green.textContent = stage3array[0].length;
			stage3brown.textContent = stage3array[1].length;
			stage3blue.textContent = stage3array[2].length;
		} else if (!stage3array[1].length == 0) {

			let picture = brownCard[1][stage3array[1][stage3array[1].length - 1]]
			lastCard.style.backgroundImage = `url('./brown/${picture}.png')`;
			console.log(picture)

			stage3array[1].pop();
			stage3green.textContent = stage3array[0].length;
			stage3brown.textContent = stage3array[1].length;
			stage3blue.textContent = stage3array[2].length;
		} else if (!stage3array[2].length == 0) {

			let picture = blueCard[1][stage3array[2][stage3array[2].length - 1]]
			lastCard.style.backgroundImage = `url('./blue/${picture}.png')`;
			console.log(picture)

			stage3array[2].pop();
			stage3green.textContent = stage3array[0].length;
			stage3brown.textContent = stage3array[1].length;
			stage3blue.textContent = stage3array[2].length;
		}
	}

})


