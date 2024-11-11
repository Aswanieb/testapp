import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
// name:string="Anu";
// n:number=100;
// ch:boolean=true;
// display(){
//   return "hello...."+this.name;
// msg="Hai....Welcome"
// ischeck="success"
// type1:boolean=false;
// type2:boolean=true;
// buttonstatus="Button Not Clicked";
// check(){
//   this.buttonstatus="Button Clicked";
// // }
// // msg="dddd"
// }
// msg:boolean=true;
// onclick(){
//   this.msg=false;
// }
msg:boolean=false;
today=new Date().getDay();
slist=
[
  {Name:"Anu",Age:21,Mark:333},
  {Name:"Aswani",Age:27,Mark:222},
  {Name:"Sneha",Age:24,Mark:444}

]
onclick(){
  this.msg=false;
}
}


