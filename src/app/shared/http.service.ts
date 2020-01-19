import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http: HttpClient) { }

  httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'Application/Json',
      accept: ' application/json'
    })
  }
  getStudents() {
 return this.http.get('http://localhost:3000/student');

  }
  getPosts() {

 return this.http.get('http://localhost:3000/post');
  }


  createStudent(newUser) {
    return this.http.post('http://localhost:3000/student',
      {
        name: newUser.name,
        email: newUser.emailname,
        password: newUser.password,
        university: newUser.university
       },  this.httpHeaders);
  }

  uploadPosts() {
    const post = {
      title: 'new title',
      body: 'title 1'
    }
    return this.http.post('http://localhost:3000/post', post, this.httpHeaders);
  }
}
