import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'the universe';
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this.getTasksFromService();
  }
  tasks = [];
  getTasksFromService() {
    this._httpService.getTasks().subscribe(data => {
      console.log("Got our tasks!", data)
      this.tasks = data.data;
    })
  }
}


// num: number;
// randNum: number;
// str: string;
// first_name: string;
// snacks: string[];
// loggedIn: boolean;


//   this.snacks = ["vanilla latte with skim milk", "brushed suede", "cookie"];
//   this.loggedIn = true;
//   this.num = 7;
//   this.randNum = Math.floor((Math.random() * 2) + 1);
//   this.str = 'Hello Angular Developer!';
//   this.first_name = 'Alpha';
