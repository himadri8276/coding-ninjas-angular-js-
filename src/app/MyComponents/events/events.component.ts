import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  private  url ="https://api.codingninjas.com/api/v3/events?event_category=ALL_EVENTS&event_sub_category=Archived&tag_list=Interview Preparation&offset=10";
event:any;
p=1;
 constructor(private http:HttpClient){}

     ngOnInit(){
      this.http.get(this.url).subscribe((data)=> {
     console.log(data);
      this.event=data;
   });

  }
}
