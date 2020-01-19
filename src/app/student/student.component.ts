import { Component, OnInit, ɵConsole } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  students: any = null;
  posts: any = null;
  name: string;
  email: string;
  password: string;
  contact = [];
  ngOnInit() {
    // this.getStudents();
  }
getPosts() {
  this.httpService.getPosts().subscribe(data => {
    this.posts = data;
  }, (error) => {
    console.log(error);
  });
}
getStudents() {
  this.httpService.getStudents().subscribe(data => {
this.students = data;
  })
}
  uploadPosts() {
    this.httpService.uploadPosts().subscribe(post => this.posts.push(post));
  }
addStudents() {
const newContact = {
  name : this.name,
  email : this.email,
  password : this.password
}
this.httpService.createStudent(newContact).subscribe(newContact => {
      console.log(newContact);
}
  )}
}

