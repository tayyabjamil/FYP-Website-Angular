import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: any;
  email: any;
  password: any;
  confirmPassword: any;
  title: any;
  type: any;
  estimateAmount: any;
  description: any;
  projectData;
image;
  constructor(private router: Router,private httpService: HttpService) { }

  ngOnInit() {
this.getProject();
  }
  public login(){
    const userAccount = {
      email : this.email,
      password : this.password
    }
    this.httpService.login(userAccount).subscribe( userAccount => {
    alert('login');

    this.router.navigate(['login']);
  })
}

createAccount() {
  const newAccount = {
    username : this.username,
    email : this.email,
    password : this.password
  }
  this.httpService.createuserAccount(newAccount).subscribe( newAccount => {
  alert('account created');
  } )
}
getProject() {
    this.httpService.getProject().subscribe(data => {
  this.projectData = data;
    })
}
project() {
  const projectData = {
  title : this.title,
  type : this.type,
  estimateAmount: this.estimateAmount,
  description: this.description
  }
  this.httpService.project(projectData).subscribe( projectData => {
    alert('project posted');
})
}
}
