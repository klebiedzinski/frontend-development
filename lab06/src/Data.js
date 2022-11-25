import wbl from "./Data/Teams_pics/wbl.jpg"

const { v4: uuidv4 } = require('uuid');

export class Team {
    constructor (config) {
        this.name = config.name || 0;
        this.id = config.id || uuidv4();
        this.image = new Image();
        this.image.src = config.src || wbl;
        this.players = config.players || []
    }
}

export class Player {
    constructor(config) {
        this.firstName = config.firstName || "Imie";
        this.lastName = config.lastName || "Nazwisko";
        this.id = config.id || uuidv4();
    }
}

