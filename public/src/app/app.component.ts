import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newTask: any;
  title = 'the universe';
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this.newTask = { title: "", description: "" }
  }
  tasks = [];
  info = {};
  current_task = {};
  edit = false;
  view_one = false;

  onSubmit() {
    // Code to send off the form data (this.newTask) to the Service
    this._httpService.addTask(this.newTask).subscribe(data => {
      console.log("added new task!", data);
    // Reset this.newTask to a new, clean object.
    this.newTask = { title: "", description: "" }
    })
    // getTasksFromService();
  }

  getTasksFromService() {
    this._httpService.getTasks().subscribe(data => {
      console.log("Got our tasks!", data)
      this.tasks = data.data;
      this.view_one = true;
    })
  }

  getInfoFromService(id: Number) {
    console.log("confirmed")
    this.info = this.tasks[id]
  }
  editInfoFromService(){
    console.log("confirmed")
    this._httpService.editTaskById(current_task.id, current_task).subscribe(data => {
      console.log("Edited task!")
    })
    this.getTasksFromService()
  }
  deleteInfoFromService(id: Number){
    console.log("confirmed")
    this._httpService.deleteTaskById(id).subscribe(data => {
      this.tasks = data.data;
      console.log("deleted task!")
    })
    this.getTasksFromService()
  }
  onButtonClick(): void {
    console.log(`Click event is working`);
    this.getTasksFromService();
  }
  onShowButtonClick(taskIndex: Number): void {
    console.log(`Show Click event is working`);
    this.getInfoFromService(taskIndex);
  }
  onEditButtonClick(id: Number, taskIndex: Number): void {
    console.log(`Edit Click event is working`);
    this.edit = true;
    this.current_task = this.tasks[taskIndex];
  }
  onDeleteButtonClick(taskIndex: Number): void {
    console.log(`Delete Click event is working`);
    this.deleteInfoFromService(taskIndex);
  }
}
