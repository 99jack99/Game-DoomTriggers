class Character{

    constructor(characterName, gunName, health){
        this.characterName = characterName;
        this.gunName = gunName;
        this.health = health;
    }

    
    updateHealthPointsChar = (points)  => {

        setTimeout(() => {
    
            healthPoints = this.health - points;
            let healthBar = document.getElementById('healthBar');
    
            healthBar.style.width = healthPoints + "%";
            
    
            if (healthPoints < -1) {
                return losing();
            }
    
        }, 500);
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
