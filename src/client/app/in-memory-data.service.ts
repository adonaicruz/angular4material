import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      {id: 1, name: 'Admin',login:'admin',password:'admin',group:'ADMIN'},
      {id: 11, name: 'Mr. Nice',login:'mrnice',password:'123',group:'ADMIN'},
      {id: 12, name: 'Narco',login:'narco',password:'123',group:'USER'},
      {id: 13, name: 'Bombasto',login:'bombasto',password:'123',group:'ADMIN'}
    ];
    return {users};
  }
}