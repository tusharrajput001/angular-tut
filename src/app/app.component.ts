import { Component } from '@angular/core';
import { Login } from './login/login';
import { Signup } from './signup/signup';


@Component({
  selector: 'app-root',
  imports: [Login, Signup],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected title = 'angular-tut';
}
