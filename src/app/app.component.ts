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
  name:string = "";
  displayName = "";

  getName(event:Event){
    const name = (event.target as HTMLInputElement).value;
    this.name = name;
  }

  showName(){
    this.displayName = this.name;
  }

  setName(){
    this.name = "Tushar"
  }

  count: number = 0;

  handleCounter(val: string) {
    if (val == 'minus') {
      if(this.count <= 1){
        this.count = 0;
      }
      else{
        this.count = this.count - 1;
      }
    } else if (val == 'plus') {
      this.count = this.count + 1;
    } else {
      this.count = 0;
    }
  }

  protected title = 'angular-tut';

  handleClickEvent() {
    console.log('Fuction Called');
    this.otherFuction();
  }

  otherFuction() {
    console.log('Other fn Called');
  }

  // name = 'Tushar';
  data: string | number = 'Hello';
  other: any = true;

  updateName() {
    this.name = 'Sidhu';
    this.data = 12;
    this.other = 'Anil';
    this.other = 12;
  }

  handleSum(a: number, b: number) {
    console.log(a + b);
  }
}
