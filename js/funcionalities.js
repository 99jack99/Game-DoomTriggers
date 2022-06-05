
/* VARS */



/* choosen player */
let player = [];
let versusChar = document.getElementById('vsCharImg');
let choosenChar = document.getElementById('choosenChar');


let healthPoints = 3000;
let winningtTit = document.getElementById('innerItem5-1');
let winningtPla = document.getElementById('innerItem5-3');


/* ------------------------------------- */
/* FUNCTION SCREEN SWITCH */

const screenSwitch = (nextScreenNumber) => {

    let nextScreen = document.getElementById(nextScreenNumber);
    nextScreen.style.display = "flex";

    let screenAvailable = ["screen1", "screen2", "screen3", "screen4", "screen5"];

    for (let screen of screenAvailable) {
        if (screen != nextScreenNumber) {
            document.getElementById(screen).style.display = "none";
        };
    };

};

/* FUNCTION CHOOSING CHARACTER */
const chooseCharacter = (character) => {
    player.push(availableCharacters[character]);
    healthPoints = player[0].health;
    if (player[0].characterName === 'john') {

        setTimeout(() => {
            vsCharImg.innerHTML = `<img id="versusImg" src="img/${player[0].characterName}.webp" alt=""></img>`;
            choosenChar.innerHTML = `${player[0].characterName} Vs The World!`;

            screenSwitch("screen3");

            setTimeout(() => {
                screenSwitch("screen4");
            }, 3000);
        }, 500);
    }
    else {
        setTimeout(() => {
            vsCharImg.innerHTML = `<img id="versusImg" src="img/${player[0].characterName}.png" alt=""></img>`;
            choosenChar.innerHTML = `${player[0].characterName} Vs The World!`
            screenSwitch("screen3");

            setTimeout(() => {
                screenSwitch("screen4");
            }, 3000);
        }, 500);
    }
};

/* VIDEOGAME */

/* FUNCTION HEALTH POINTS */
function updateHealthPoints(points) {

    setTimeout(() => {

        healthPoints = healthPoints - points;
        let healthBar = document.getElementById('healthBar');

        healthBar.style.width = healthPoints + "%";
        

        if (healthPoints < -1) {
            return losing();
        }

    }, 500);
}

/* MATAR ZOMBIE */
const kill = (zombie) => {
    
        /* zombie.classList.add('deadEnemy'); */

        zombie.classList.add('deadEnemy');

    setTimeout(() => {
        zombie.classList.remove('deadEnemy');
    }, 100)
  
    
};

/* BEING ATTACKED */
const hit = (zombie) => {

    zombie.classList.add("show");

    /* WHILE HE IS SHOWN HE ATTACKS ME */
    setTimeout(() => {
        beingHit(zombie);
    }, 700);

    setTimeout(() => {
        zombie.classList.remove("show");
    }, 1000)
};

/* HOW ZOMBIE SHOWS HIMSELF */
const showEnemy = (zombie) => {

    zombie.classList.add('show');

    setTimeout(() => {
        zombie.classList.remove('show');
    }, 4000);
}

/* ENEMY HITS ME */
const beingHit = (zombie) => {

    zombie.classList.add('shot');

    updateHealthPoints(25);

    setTimeout(() => {
        zombie.classList.remove('shot');
    }, 400)
};

/* IDENTIFY WHOSE NOT DEAD */
const shownZombies = () => {
    return document.querySelectorAll(".enemy:not(.deadEnemy)");
}

/* FUNCTION RANDOM ATTACKS */
const randomAttacks = () => {

    let randomZombie = Math.floor(Math.random() * shownZombies().length);
    let zombie = shownZombies()[randomZombie];
    let delay = Math.random() * 2000 + 1000;

    setTimeout(() => {
        hit(zombie);
        randomAttacks();
    }, delay);
}

/* FUNCTION WINNING */
let matados = 0;
const winning = (zombie)=> {
    setTimeout(()=>{
        if (zombie.classList.contains('deadEnemy')) {
            matados ++;
            if (matados == 3) {
                winningtTit.innerHTML = 'Victory! You scaped the zombies!';
                screenSwitch('screen5');
                matados = 0;
                healthPoints = 3000;
                player = [];
            }
        }
    })
}

const losing = ()=>{
    setTimeout(()=>{
        winningtTit.innerHTML = 'Defeat! You have been eaten!';
        screenSwitch('screen5');
        matados = 0;
        healthPoints = 3000;
        player = [];
    })
}

/* COUNTDOWN */
timeLeft = 60;
const clock = () =>{
	timeLeft--;
	document.getElementById("clock").innerHTML = timeLeft;
	if (timeLeft > 0) {
		setTimeout(clock, 1000);
	}
}
setTimeout(clock, 1000);













