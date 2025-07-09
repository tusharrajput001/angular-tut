import { Component } from '@angular/core';
// import { Login } from './login/login';
// import { Signup } from './signup/signup';
// import { ProfileComponent } from './profile/profile.component';
// import { FormsModule } from '@angular/forms';
// import { NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { User } from './user/user';
import { CurrencyConvertorPipe } from './pipe/currency-convertor-pipe';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgIf, User,CurrencyConvertorPipe ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {


  amount = 10;

  userName = "Bruce Wayne"

  onUserChange(user:string){
    this.userName = user;

  }

  addDetails(val:NgForm){
    console.log(val);
  }




  // profileForm = new FormGroup({
  //   name: new FormControl('',[Validators.required]),
  //   password: new FormControl('',[Validators.required,Validators.minLength(5)]),
  //   email: new FormControl('',[Validators.required, Validators.maxLength(50)]),
  // });

  // onSubmit() {
  //   console.log(this.profileForm.value);
  // }

  // get name(){
  //   return this.profileForm.get('name');
  // }

  //   get email(){
  //   return this.profileForm.get('email');
  // }


  //   get password(){
  //   return this.profileForm.get('password');
  // }

  // name = new FormControl();
  // password = new FormControl();

  // displayValue(){
  //   console.log(this.name.value, this.password.value);
  // }

  // login = false;
  // show = true;
  // bgColor = "red";
  // fontSize = "40px";
  // headingSizeBig = "80px";
  // headingSizeSmall = "30px";
  // zoom = true;
  // updateSize(){
  //   this.zoom = !this.zoom;
  // }
  // task = '';
  // taskList: { id: number; task: string }[] = [];
  // addTask() {
  //   this.taskList.push({ id: this.taskList.length + 1, task: this.task });
  //   this.task = '';
  // }
  // deleteTask(taskId:number) {
  //   this.taskList = this.taskList.filter((item) => item.id !== taskId);
  // }
  // name = 'Tushar';
  // x=signal(10);
  // y=signal(20);
  // z=computed(()=>this.x() + this.y());
  // showValue(){
  //   console.log(this.z());
  //   this.x.set(100)
  //   console.log(this.z());
  // }
  // data = signal< number | string >(10);
  // updateSignal(){
  //   this.data.set("Hello");
  // }
  //   cnt = signal(10);
  //   x:number = 20;
  //   constructor() {
  //     effect(() => {
  //       console.log(this.cnt());
  //       console.log(this.x);
  //     });
  //   }
  //   updateVal() {
  //     this.cnt.set(this.cnt() + 1);
  //   }
  //   updateX() {
  //     this.x = this.x + 1;
  //   }
  // users = ['Tushar', 'ujjwal', 'Kunal', 'Ayush', 'Mayank'];
  // users = [];
  // students = [
  //   { name: 'Tushar', age: 23, address: 'Delhi' },
  //   { name: 'ujjwal', age: 23, address: 'UP' },
  //   { name: 'Kunal', age: 23, address: 'Delhi' },
  //   { name: 'Ayush', age: 23, address: 'UP' },
  //   { name: 'Mayank', age: 23, address: 'UP' },
  // ];
  //   color = 1;
  //   display = true;
  //   handleColor(val: number) {
  //     this.color = val;
  //   }
  //   handleInput(event: Event) {
  //     this.color = parseInt((event.target as HTMLInputElement).value);
  //   }
  //   name: string = '';
  //   displayName = '';
  //   getName(event: Event) {
  //     const name = (event.target as HTMLInputElement).value;
  //     this.name = name;
  //   }
  //   showName() {
  //     this.displayName = this.name;
  //   }
  //   setName() {
  //     this.name = 'Tushar';
  //   }
  //   toogleDiv() {
  //     this.display = !this.display;
  //   }
  //   count: number = 0;
  //   handleCounter(val: string) {
  //     if (val == 'minus') {
  //       if (this.count <= 1) {
  //         this.count = 0;
  //       } else {
  //         this.count = this.count - 1;
  //       }
  //     } else if (val == 'plus') {
  //       this.count = this.count + 1;
  //     } else {
  //       this.count = 0;
  //     }
  //   }
  //   protected title = 'angular-tut';
  //   handleClickEvent() {
  //     console.log('Fuction Called');
  //     this.otherFuction();
  //   }
  //   otherFuction() {
  //     console.log('Other fn Called');
  //   }
  //   // name = 'Tushar';
  //   // data: string | number = 'Hello';
  //   other: any = true;
  //   updateName() {
  //     this.name = 'Sidhu';
  //     this.data = 12;
  //     this.other = 'Anil';
  //     this.other = 12;
  //   }
  //   handleSum(a: number, b: number) {
  //     console.log(a + b);
  //   }
  // }
}
