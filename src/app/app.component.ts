import { Component } from '@angular/core';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { ProfileComponent } from './profile/profile.component';


@Component({
  selector: 'app-root',
  imports: [Login, Signup, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected title = 'angular-tut';
}
