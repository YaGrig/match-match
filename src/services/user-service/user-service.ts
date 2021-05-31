import { UserRepository } from "./user-repository";
import { User } from "../../models/user";
import { debug } from "webpack";
const { v4: uuidv4 } = require('uuid');
const userRepository = new UserRepository;
const currentUserArray: Array<object> = [];

export class userService {
  public currentUser: User | null = null;
  async create(
    firstname: string = '',
    lastname: string = '',
    email: string = '',
    id: number = uuidv4(),
    diff: number = 15
  ) {
    const user = await userRepository.create(firstname, lastname, email, id, diff);
    this.currentUser = user;
    currentUserArray[0] = this.currentUser;
    console.log(currentUserArray);
    return this.currentUser;
  }

  getTopPlayers() {
    const result = userRepository.GetAllPlayers();
    if (result){
    return result;
    }
  }
  async updateUserScore(
    score: number,
    userId: any = Object.values(currentUserArray[0])[1],

  ) {
    const result = await userRepository.updateUserScore(score, userId);
    return result;
  }
  async updateUserDiff(
    diff: number,
    userId: any = Object.values(currentUserArray[0])[1],

  ) {
    console.log(Object.values(currentUserArray[0])[1]);
    const result = await userRepository.updateUserDiff(diff, userId);
    return result;
  }
  //   getUserDiff(
  //    userId:any = Object.values(currentUserArray[0])[1],

  //   ){
  //     debugger;
  //   console.log(Object.values(currentUserArray[0])[1]);
  //   const result =  userRepository.getUserDiff(userId);
  //   console.log(result);
  //   return result;
  // }
}

