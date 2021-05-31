import { v4 as uuidv4 } from 'uuid';
import { UserRepository } from './user-repository';
import { User } from '../../models/user';

const userRepository = new UserRepository();
const currentUserArray: Array<object> = [];

export class UserService {
  public currentUser: User | null = null;

  async create(
    firstname = '',
    lastname = '',
    email = '',
    id:any = uuidv4(),
    diff = 0,
    card = 0,
  ) {
    const user = await userRepository.create(firstname, lastname, email, id, diff, card);
    this.currentUser = user;
    currentUserArray[0] = this.currentUser;
    return this.currentUser;
  }

  async getTopPlayers() {
    const result = await userRepository.GetAllPlayers();
    return result;
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
    const result = await userRepository.updateUserDiff(diff, userId);
    return result;
  }

  async getUserDiff(
    userId: any = Object.values(currentUserArray[0])[1],

  ) {
    const result = await userRepository.getUserDiff(userId);
    return result;
  }

  async updateUserCards(
    card: number,
    userId: any = Object.values(currentUserArray[0])[1],
  ) {
    const result = await userRepository.updateUserCards(card, userId);
    return result;
  }

  async getUserCards(
    userId: any = Object.values(currentUserArray[0])[1],

  ) {
    const result = await userRepository.getUserCards(userId);
    return result;
  }
}
