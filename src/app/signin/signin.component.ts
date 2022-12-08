import {Component} from '@angular/core';
import {User} from '../models/user/user.model';
import {IUser} from '../models/user/user.interface';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers: [MessageService]
})
export class SigninComponent {
  public user: IUser = new User();

  constructor(private messageService: MessageService) {
  }

  onSubmit(): void {
    if (this.user.email === 'user@company.com' && this.user.password === 'Password1!') {
      this.messageService.add({severity: 'success', summary: 'You have successfully signed in'});
    } else {
      this.messageService.add({severity: 'error', summary: 'The email or password you entered is incorrect'});
      localStorage.setItem('fullName', this.user.fullName as string);
      localStorage.setItem('email', this.user.email as string);
    }
  }
}
