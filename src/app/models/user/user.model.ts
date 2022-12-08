import {IUser} from './user.interface';

export class User implements IUser {
  constructor(
    public id?: string,
    public fullName?: string,
    public email?: string,
    public password?: string
  ) {
  }
}
