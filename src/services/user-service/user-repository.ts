import { debug } from 'webpack';
import { Game } from '../../components/game/game';
import { User } from '../../models/user';
export class UserRepository {

  private readonly dbName = 'match-match';
  private readonly storeName = 'users';
  private loggedUser: User | null = null;
  private db?: IDBDatabase;
  public players: Array<string>;

  constructor() {
    this.players = [];
    const openRequest = indexedDB.open(this.dbName);
    openRequest.onsuccess = (event) => {
      this.db = (event.target as any).result;
      console.log(this.db)
    };
    openRequest.onupgradeneeded = (event) => {
      const db = (event.target as any).result;

      if (!db.objectStoreNames.contains(this.storeName)) {
        const store = db.createObjectStore(this.storeName, { keyPath: 'id' });
        store.createIndex('f', 'firstname')
      }

    };
  }

  create(
    firstname: string = '',
    lastname: string = '',
    email: string = '',
    id: number,
    diff:number = 15
  ): Promise<User> {
    return new Promise((res, rej) => {
      const transaction = this.db?.transaction(this.storeName, 'readwrite');
      const user = new User(firstname, lastname, email, id,diff);
      const users = transaction?.objectStore(this.storeName);
      if (users) {
        users.add(user).onsuccess = () => {
          res(user);
          console.log('success');
        };
      } else {
        rej();
        console.log('nosuccess')
      }
    });
  }

  GetAllPlayers() {
    const array: Array<any> = [];
    const transaction = this.db?.transaction(this.storeName, 'readwrite');
    const users = transaction?.objectStore(this.storeName);
    const index = users?.index('f');
    if (users) {
      let request = users.openCursor();
      request.onsuccess = function () {
        let cursor = request.result;
        if (cursor) {
          let key = cursor.key;
          let value = cursor.value;
          array.push(value);
          array.sort((a,b) => (a.score > b.score)? -1:(b.score > a.score)? 1: 0 );
          cursor.continue();
        }
      };
      return array
    }
  }

  updateUserScore(score:number,userId: any ): void {
    const transaction = this.db?.transaction(this.storeName, 'readwrite');
    const users = transaction?.objectStore(this.storeName);
    if (users) {
      let request = users.openCursor();
      request.onsuccess = function () {
        let cursor = request.result;
        if (cursor) {
          let key = cursor.key;
          if(key === `${userId}`){
          let value = cursor.value;
          value.score = score;
          const requestLast = cursor.update(value)
          requestLast.onsuccess = () =>{
            console.log('heheheheh')
          }
          }
          cursor.continue();
        }
      };
    }
  }
  // return result?.sort((a,b) => (a.score > b.score)? 1:(b.score > a.score)? -1: 0 );
  updateUserDiff(diff:number,userId: any ): void {
    const transaction = this.db?.transaction(this.storeName, 'readwrite');
    const users = transaction?.objectStore(this.storeName);
    if (users) {
      let request = users.openCursor();
      request.onsuccess = function () {
        let cursor = request.result;
        if (cursor) {
          let key = cursor.key;
          if(key === `${userId}`){
          let value = cursor.value;
          value.diff = diff;
          const requestLast = cursor.update(value);
          requestLast.onsuccess = () =>{
            console.log('heheheheh')
          }
          }
          cursor.continue();
        }
      };
    }
  }
  // getUserDiff(userId:any){
  //   const array: Array<any> = [];
  //   const transaction = this.db?.transaction(this.storeName, 'readwrite');
  //   const users = transaction?.objectStore(this.storeName);
  //   return new Promise ((res, rej) =>{ if (users) {
  //     let request = users.openCursor();
  //     request.onsuccess = function () {
  //       let cursor = request.result;
  //       if (cursor) {
  //         let key = cursor.key;
  //         if(key === `${userId}`){
  //         let value = cursor.value.diff;
  //         array.push(value);
  //         // requestLast.onsuccess = () =>{
  //         //   console.log('heheheheh')
  //         //   array.push(value)
  //         //   console.log(array)
  //         // }
  //         }
  //         cursor.continue();
  //       }
  //     };
  //     return array;
  //   }
  //   }
  }
