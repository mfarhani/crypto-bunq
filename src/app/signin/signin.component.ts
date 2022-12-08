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
    if (this.user.email === 'user@company.com' && this.user.password === 'Password1!') {
      console.log('Signed In Successfully');
    } else {
      console.error('The email or password you entered is incorrect.');
    }
  }
}
