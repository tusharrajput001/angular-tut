import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:'app-profile',
    imports: [],
    templateUrl:'./profile.component.html',
    styleUrl:'./profile.component.css'
})


export class ProfileComponent {
    userName:string| null = '';
    constructor(private route:ActivatedRoute){}
    ngOnInit():void{
        this.route.queryParams.subscribe(params => {
            console.log(params);
        })
    }
}