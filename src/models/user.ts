const { v4: uuidv4 } = require('uuid');

export class User {
  firstname:string;

  lastname:string;

  email:string;

  score?:number = 0;

  id?:number = uuidv4();

  diff = 0;

  card = 0;

  image: any = 0;

  constructor(firstname:string, lastname:string, email:string, id?:number, score?:number, diff = 0, card = 0) {
    this.firstname = firstname,
    this.lastname = lastname,
    this.email = email,
    this.score = score,
    this.id = id,
    this.diff = diff,
    this.card = card;
  }
}
