import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  
    @Input() user:string=''

  // name:null | string = "";

  // constructor(private route:ActivatedRoute){}

  // ngOnInit(){
  //   this.route.params.subscribe((params)=> {
  //     this.name = params['name'];
  //     console.log(params);
  //   })
  // }
}
