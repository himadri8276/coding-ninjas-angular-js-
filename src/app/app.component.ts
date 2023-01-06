import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
   title = 'filter';
   private  url ="https://api.codingninjas.com/api/v3/event_tags";
   private  url2 ="https://api.codingninjas.com/api/v3/events?event_category=ALL_EVENTS&event_sub_category=Archived&tag_list=Interview Preparation&offset=0"
    tegs1:any;
    event:any;
    p = 1;
   constructor(private http:HttpClient){}

       ngOnInit(){
        this.http.get(this.url).subscribe((data)=> {
        this.tegs1=data;
     });

      this.http.get(this.url2).subscribe((data1)=> {
     console.log(data1);
      this.event=data1;

   });

    }
}
