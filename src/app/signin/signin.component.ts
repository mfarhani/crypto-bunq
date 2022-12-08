import {Component} from '@angular/core';
import {User} from '../models/user/user.model';
import {IUser} from '../models/user/user.interface';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  public user: IUser = new User();

  onSubmit(): void {
    console.log(this.user);
  }
}
