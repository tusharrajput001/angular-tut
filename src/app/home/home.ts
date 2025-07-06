import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  users= [
    {
      id:1,
      name:'Tushar',
      age:23,
      email:"tusharr0491@gmail.com"
    },
        {
      id:2,
      name:'Shivam',
      age:23,
      email:"Shivam@gmail.com"
    }
    ,
        {
      id:3,
      name:'Ujjwal',
      age:23,
      email:"Ujjwal21@gmail.com"
    },
        {
      id:4,
      name:'Ayush',
      age:23,
      email:"Ayush2005@gmail.com"
    }
  ]



  // constructor(private router: Router) {}

  // goToProfile() {
  //   this.router.navigate(['profile'], {queryParams:{name:"Tushar Rajput"}});
  // }
}
