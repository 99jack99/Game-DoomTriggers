class Character{

    constructor(characterName, gunName, health /* gunDmg, gunDelay */){
        this.characterName = characterName;
        this.gunName = gunName;
        this.health = health;
        /* this.gunDmg = gunDmg;
        this.gunDelay = gunDelay; */
    }

};

let johnwick = new Character('john', 'Pistol', 300);

let myers = new Character('myers', 'Machete', 200);

let rick = new Character('rick', 'Rifle', 100);

let availableCharacters = {
    '1': johnwick,
    '2': myers,
    '3': rick
}
