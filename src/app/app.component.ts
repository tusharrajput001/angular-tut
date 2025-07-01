import { Component } from '@angular/core';
import { Login } from './login/login';


@Component({
  selector: 'app-root',
  imports: [Login],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected title = 'angular-tut';
}
