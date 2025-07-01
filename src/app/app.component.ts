import { Component } from '@angular/core';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [Login, Signup, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected title = 'angular-tut';

  handleClickEvent() {
    console.log('Fuction Called');
    this.otherFuction();
  }

  otherFuction() {
    console.log('Other fn Called');
  }

  name = 'Tushar';
  data: string | number = 'Hello';
  other: any = true;

  updateName() {
    this.name = 'Sidhu';
    this.data = 12;
    this.other = 'Anil';
    this.other = 12;
  }

  handleSum(a:number,b:number){
    console.log(a+b);
  }
}
