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

  }
  tasks = [];
  getTasksFromService() {
    this._httpService.getTasks().subscribe(data => {
      console.log("Got our tasks!", data)
      this.tasks = data.data;
    })
  }
  info = [];
  getInfoFromService(taskIndex: Number) {
    this.info = this.tasks[taskIndex];
  }
  onButtonClick(): void {
    console.log(`Click event is working`);
    this.getTasksFromService();
  }
  onShowButtonClick(taskIndex: Number): void {
    console.log(`Show Click event is working`);
    this.getInfoFromService(taskIndex);
  }
  onButtonClickParam(num: Number): void {
    console.log(`Click event is working with num param: ${num}`);
    // call the service's method to post the data, but make sure the data is bundled up in an object!
    let observable = this._httpService.postToServer({ title: "hello world title", description: "hello world", completed: true });
    observable.subscribe(data => console.log("Got our data!", data));
  }
  onButtonClickParams(num: Number, str: String): void {
    console.log(`Click event is working with num param: ${num} and str param: ${str}`);
  }
  onButtonClickEvent(event: any): void {
    console.log(`Click event is working with event: ${event}`);
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
